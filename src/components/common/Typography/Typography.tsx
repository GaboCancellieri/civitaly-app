import React from "react";
import styles from "./Typography.module.scss";
import classNames from "classnames";

type TypographyProps = {
  variant: "title" | "subtitle" | "text" | "caption";
  children: React.ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  return (
    <span className={classNames(styles.typography, styles[variant], className)}>
      {children}
    </span>
  );
};

export default Typography;
