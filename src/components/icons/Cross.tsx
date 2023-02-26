import IconWrapper, { IconProps } from "@/components/icons/IconWrapper";
import type { FC } from "react";

const Cross: FC<IconProps> = ({ fill, height, width, onClick }) => (
  <IconWrapper fill={fill} height={height} width={width} onClick={onClick}>
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
  </IconWrapper>
);

export default Cross;
