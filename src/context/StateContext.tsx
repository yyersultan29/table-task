import { ChangeEvent, createContext } from "react";


export interface MyContextValues {
  to: number;
  from: number;
  type: string[]
  stars: string[]
  reviewCount: number
  selectedCountries: string[];
  handleChangeFrom: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeTo: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeStars: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeType: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSelectCountry: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeReviewCount: (event: ChangeEvent<HTMLInputElement>) => void;

}

export const StateContext = createContext<MyContextValues | undefined>(undefined);

