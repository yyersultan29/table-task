import { ButtonHTMLAttributes, FC, ReactElement } from "react"


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement
}




export const Button: FC<IProps> = (props) => {

  const { children, icon, ...otherProps } = props;
  return (
    <button {...otherProps}>

      {icon ? <div>{icon}</div> : null}

      {children}

    </button>
  )
}