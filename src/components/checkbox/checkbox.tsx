import { FC, InputHTMLAttributes } from "react";

import "./checkbox-style.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CheckBox: FC<IProps> = (props) => {
  const { label, ...otherProps } = props;

  return (
    <div className="container">
      <input
        type="checkbox"
        id={`id_${label}`}
        className="checkbox"
        {...otherProps}
      />
      <label htmlFor={`id_${label}`}>{label}</label>
    </div>
  );
};
