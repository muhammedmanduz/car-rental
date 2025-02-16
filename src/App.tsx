import React from "react";
import Header from "./components/header/İndex";
import Hero from "./components/hero";
import Filter from "./components/filter";
import List from "./components/list";

const App = () => {
  return (
    <div className="bg-[rgba(23,23,23)] min-h-screen text-white">
      <Header />

      <Hero />

      <Filter />

      <List />
    </div>
  );
};

export default App;
