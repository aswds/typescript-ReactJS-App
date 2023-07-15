import React, { FC } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

type Props = {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactNode;
  onClick: (num: number) => void;
};

const Card: FC<Props> = ({ height, width, variant, children, onClick }) => {
  return (
    <div
      style={{
        height,
        width,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "none",
      }}
      onClick={() => onClick(5)}
    >
      {children}
    </div>
  );
};

export default Card;
