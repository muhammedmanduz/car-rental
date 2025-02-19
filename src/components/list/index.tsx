import React, { useEffect, useState } from "react";
import { fetchCars } from "../../utils/fetchCars";
import { CarType } from "../../utils/types";
import Warning from "./Warning";
import Card from "./Card";
import Button from "../button";
import { useSearchParams } from "react-router-dom";

const List = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);

  const [params] = useSearchParams();

  //urldeki bütün arama parametrelreini al
  const paramsObject = Object.fromEntries(params.entries());

  //marka veya model değişince limiti 5 e çek
  useEffect(() => {
    setLimit(5); //limiti her render sırasında sıfırla
  }, [params.get("make"), params.get("model")]);

  //apiden verileri al
  useEffect(() => {
    fetchCars({ limit, ...paramsObject })
      .then((data) => setCars(data))
      .catch(() => {
        setIsError(true);
      });
  }, [limit, params]);

  //1) cars null ise > Henüz API'dan cevap gelmemiştir
  //2) isError true ise > API'dan hatalı cevap gelmemiştir
  //3) cars [] ise > Aranılan kriterde araç yoktur
  //4) cars dolu[] ise > API'dan veriler gelmiştir

  return (
    <div className="padding-x max-width">
      {!cars ? (
        <Warning>Yükleniyor...</Warning>
      ) : isError ? (
        <Warning>Bir hata oluştu!</Warning>
      ) : cars.length < 1 ? (
        <Warning>Aranılan kritere uygun sonuç bulunamadı</Warning>
      ) : (
        cars.length >= 1 && (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>

            <div className="w-full flex-center py-10">
              {/* 30 dan sonra renderlamayacak */}
              {limit < 30 && (
                <Button
                  title="Devamını yükle"
                  handleClick={() => setLimit(limit + 5)}
                />
              )}
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default List;
