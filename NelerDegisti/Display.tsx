import React from 'react'
//Bir bileşeb prop alıyorsa mutklaka aldıgı propların tipini tanımlamak zorundayız

interface IProps{
    count :number;
}
const Display = ({count}:IProps) => {
  return (
   <h1>{count}</h1>
  )
}

export default Display