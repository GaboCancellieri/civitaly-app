import { FC, ReactNode } from "react";
import { ButtonSize, ButtonType } from "../../../types/Button";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type?: ButtonType;
  size?: ButtonSize;
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "primary",
  size = "normal",
  isDisabled = false,
}) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles[type]]: true,
        [styles[size]]: true,
      })}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
