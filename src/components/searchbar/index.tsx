import ReactSelect from "react-select";
import { makes } from "../../utils/constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>(params.get("make") || "");
  const [model, setModel] = useState<string>(params.get("make") || "");

  //string dizisini nesne dizisine çevirdik(her render sırasında gereksiz hesaplamanın önüne gectik)
  const options = useMemo(
    () => makes.map((make) => ({ value: make, label: make })),
    []
  );

  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // marka ve modeli url'e arama parametresi olarak ekle
    setParams({ make, model });
  };

  //url deki seçili markayı al
  const selected = {
    label: params.get("make") || "",
    value: params.get("make") || "",
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          onChange={(e) => setMake(e!.value)} // !:nul olma ihtimalini görmezden gel
          className="w-full text-black"
          options={options}
          defaultValue={selected}
          placeholder="Marka seçiniz..."
        />

        <button className="ml-3 sm:hidden  ">
          <img src="/search.svg" className="size-[40px]" alt="search-icon" />
        </button>
      </div>

      <div className="searchbar__item">
        <img
          className="absolute ml-3"
          src="/model-icon.png"
          alt="model-search"
          width={25}
        />

        <input
          onChange={(e) => setModel(e.target.value)}
          type="text"
          className="searchbar__input rounded  px-4 text-black"
          placeholder="örn: civic"
          defaultValue={params.get("model") || ""}
        />

        <button className="ml-3">
          <img src="/search.svg" className="size-[40px]" alt="search-icon" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
