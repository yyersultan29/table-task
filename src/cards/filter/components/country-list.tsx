import { ChangeEvent, FC, memo, useMemo, useState } from "react";

import countries from "../../../data/countries.json";
import SearchIcon from "../../../assets/search.svg";
import { Input } from "../../../components/input/input"
import { CheckBox } from "../../../components/checkbox/checkbox"

interface IProps {
  selectedCountries: string[],
  onSelectCountry: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CountryListCompoent: FC<IProps> = ({ selectedCountries, onSelectCountry }) => {

  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filteredCountList = useMemo(() => {
    return countries.filter(country => country.name.includes(value));
  }, [value]);

  return (
    <div className="min-w-[325px] flex flex-col gap-[10px] ">

      <Input
        label="Country"
        placeholder="Search country"
        icon={<img src={SearchIcon} alt="search" />}
        value={value}
        onChange={handleChange}
      />

      <div
        className={`flex gap-[10px] 
        overflow-scroll h-[202px] 
        flex-col border-2 rounded-xl 
        px-[20px] py-[24px]`}
      >
        {filteredCountList.map((country) => (
          <CheckBox
            key={country.name}
            label={country.name}
            value={country.name}
            checked={selectedCountries.includes(country.name)}
            onChange={onSelectCountry}
          />
        ))}
      </div>

    </div>
  )
}
export const CountryList = memo(CountryListCompoent);