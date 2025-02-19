import { CarType } from "./types";

const options = {
  headers: {
    "x-rapidapi-key": "c02171dccamshc9d34be56b653cap167ddcjsnb444fd47924d",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

//gelen parametrelerin tipini tanımla
type Parameters = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};

// Asenkron fonksiyonların return tipinde doğrudan fonksiyonun return ettiği veriyi yazamayız. Fonksiyonların hata döndürme ihtimalinide göze alarak ts'in içerisinde bulunan Promise tipine return verimiz generic olarak gönderilmeli
export const fetchCars = async ({
  limit,
  make = "bmw",
  model = "",
  fuel_type = "",
  year = "",
}: Parameters): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;

    const res = await fetch(url, options);

    const data = await res.json();

    console.log(data);

    //diğer sayfalarda kullanmak için return
    return data;
  } catch (error) {
    throw new Error("Verileri alırken sorun oluştu");
  }
};
