//proje içerisinde birden fazla çok dosyada tanımlayacağız veya bileşen içerisinde karışıklık yaratmasını istemeyeceğiz tipleri bu dosyada tanımmlar export edip kullanırız


export type CarType = {
  city_mpg: number;
  class: "string";
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "rwd" | "awd" | "fwd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: "string";
  model: "string";
  transmission: "a" | "m";
  year: number;
};
