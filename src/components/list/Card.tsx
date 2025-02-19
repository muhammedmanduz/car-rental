import React, { useState } from "react";
import { CarType } from "../../utils/types";
import Info from "./Info";
import Button from "../button";
import { motion } from "framer-motion";
import Modal from "../modal";
import generateImage from "../../utils/generateimage";

type Props = {
  car: CarType;
};

const Card = ({ car }: Props) => {
  //modal için  aç kapa
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);

    document.body.style.overflow = "hidden"; // arkaplanda scrollama gizle
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }} //başlangıc
      whileInView={{ scale: 1, opacity: 1 }} //ekrana geldiği zaman
      className="car-card group" //hover ile ilgili
    >
      {/*Araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* Araba fiyatı*/}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>

        {/**1500 -8500 */}
        <span className="text-[32px]">
          {Math.round(Math.random() * 7000) + 1500}
        </span>
        <span className="font-semibold self-end">/gün</span>
      </div>

      {/**Resim alanı */}
      <div className="w-full">
        <img
          src={generateImage(car)}
          className="w-full h-full object-contain"
        />
      </div>

      {/* alt kısım */}
      <div className="w-full">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>

        {/* mause yi üzerine gertirdiğimiz zaman hover sırasında flex olsun */}
        <div className="mt-[4px] hidden group-hover:flex">
          <Button
            designs="w-full py-[25px] text-white"
            title="Daha fazla"
            icon="right-arrow.svg"
            handleClick={handleOpen}
          />
        </div>
      </div>

      <Modal isOpen={isOpen} close={handleClose} car={car} />
    </motion.div>
  );
};

export default Card;
