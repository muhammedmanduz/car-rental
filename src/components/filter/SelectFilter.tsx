import ReactSelect from "react-select";
import { fuels } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const SelectFilter = () => {
  //params'ı kullanmadık ondan _ koyduk
  const [params, setParams] = useSearchParams();

  const fuel = params.get("fuel_type");

  //default yakıt verisi
  const selected = !fuel ? fuels[0] : fuels.find((i) => i.value === fuel);

  return (
    <div>
      <ReactSelect
        options={fuels}
        className="text-black min-w-[130px]"
        defaultValue={selected}
        onChange={(e) => {
          params.set("fuel_type", e!.value.toLowerCase());

          setParams(params);
        }}
      />
    </div>
  );
};

export default SelectFilter;
