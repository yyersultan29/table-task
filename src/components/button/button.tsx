import { ButtonHTMLAttributes, ReactNode, forwardRef, useEffect, useRef, useState } from "react"

import cn from "classnames";

import styles from "./button.module.scss";
import { Loader } from "../loader/loader";


const styleSize = {
  s: styles["Button--size-s"],
  m: styles["Button--size-m"],
  l: styles["Button--size-l"],
};

const stylesView = {
  primary: styles["Button--view-primary"],
  secondary: styles["Button--view-secondary"],
  tertiary: styles["Button--view-tertiary"],
  outlined: styles["Button--view-outlined"],
  filled: styles["Button--view-filled"],
  link: styles["Button--view-link"],
  ghost: styles["Button--view-ghost"]
}


export type ComponentProps = {
  /**
   * Button type
   */
  view?:
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outlined' // deprecated
  | 'filled' // deprecated
  | 'link'
  | 'ghost';

  /**
   * to put something 
   */
  leftAddons?: ReactNode;

  /**
   * to put something 
   */
  rightAddons?: ReactNode;

  /**
   * Btn size
  */

  size?: "s" | "m" | "l"

  /**
   * to make width full w-100%
  */
  block?: boolean;

  /**
   * Additional classes
  */
  className?: string;

  /**
   * Link btn 
  */

  /**
   * To show loading
   */
  loading?: boolean;

  /**
   * no wrap text
   */
  // nowrap?: boolean;

  /**
   * Set of colors for btn
   */
  colors?: "default" | "inverted";

}


export interface ButtonProps extends ComponentProps, ButtonHTMLAttributes<HTMLButtonElement> { }


// min time to display loader
export const LOADER_MIN_TIME = 500;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      view = "secondary",
      leftAddons,
      rightAddons,
      size = "m",
      block = false,
      className,
      loading = false,

      ...restProps
    },
    ref

  ) => {

    const [loaderTimePassed, setLoaderTimePassed] = useState(true);

    const timerId = useRef(0);

    const showLoader = loading || !loaderTimePassed;

    useEffect(() => {
      if (loading) {
        setLoaderTimePassed(false);
        timerId.current = window.setTimeout(() => {
          setLoaderTimePassed(true);
        }, LOADER_MIN_TIME);
      }
    }, [loading]);

    useEffect(() => {
      return () => {
        window.clearTimeout(timerId.current);
      };
    }, []);


    const { disabled, type = "button", ...restButtonProps } = restProps as ButtonHTMLAttributes<HTMLButtonElement>;


    return (
      <button
        className={cn(
          className,
          styles.Button,
          styleSize[size],
          stylesView[view],
          showLoader && styles.loading,
          block && styles.block,
        )}
        {...restButtonProps}
        type={type}
        disabled={disabled || showLoader}
        ref={ref}
      >

        {leftAddons &&
          <span className={styles.addons}>
            {leftAddons}
          </span>
        }

        {children && (
          <span className={cn(styles.text, { [styles.stretchText]: !(leftAddons || rightAddons) })}>
            {children}
          </span>
        )}

        {showLoader &&
          <Loader className={styles.loader} />
        }

        {rightAddons &&
          <span className={styles.addons}>
            {rightAddons}
          </span>
        }

      </button>
    )
  });