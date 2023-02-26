import type { FC, ReactNode } from "react";

export interface IconProps {
  fill: string;
  height?: number;
  width?: number;
  onClick?: () => void;
}

interface Props {
  fill: string;
  children: ReactNode;
  height?: number;
  width?: number;
  onClick?: () => void;
}

const IconWrapper: FC<Props> = ({
  children,
  fill,
  height = 32,
  width = 32,
  onClick,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 16 16"
    onClick={onClick}
  >
    {children}
  </svg>
);

export default IconWrapper;
