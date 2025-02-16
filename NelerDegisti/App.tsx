import React, { ChangeEvent, useRef, useState } from "react";
import Display from "./Display";

const App = () => {
  //usestate ile tutulan state tipini generic yardımıyla belirlemeliyiz
  const [count, setCount] = useState<number>(0);

  //3- veri tutan hethangi bir hook mesela useRef kullanırken de tip tanımlamak zorundayız
  //*Her jsx elementinin kendine ait tipleri vardır (HTML element)

  const titleRef = useRef<HTMLHeadElement>(null);

  //*4-) Fonk da event parametresinin tipini tanımlamak zorundayız.Bu eventin tipini tanımlarken jsx elementlerinde old gibi içerisindeki hazır tipleri kullanırız.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };


  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(titleRef.current?.textContent);
  };

  return (
    <div>
      <h1 ref={titleRef}>Selamlar</h1>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <button onClick={() => setCount(count - 1)}>-</button>
      </form>

      <Display count={count} />

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
