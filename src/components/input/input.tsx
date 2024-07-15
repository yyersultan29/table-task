import { FC, InputHTMLAttributes, ReactElement } from "react";

import "./input-style.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactElement;
}

export const Input: FC<IProps> = (props) => {
  const { label, icon, ...otherProps } = props;

  return (
    <div className="input-container">
      {label && <label htmlFor="input">{label}</label>}

      <div className="input-area">
        <input
          type="text"
          id="input"
          style={{ paddingLeft: icon ? "36px" : "16px" }}
          {...otherProps}
        />
        {icon ? <div className="input-icon">{icon}</div> : null}
      </div>
    </div>
  );
};
