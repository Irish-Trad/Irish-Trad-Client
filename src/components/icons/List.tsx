import IconWrapper, { IconProps } from "@/components/icons/IconWrapper";
import type { FC } from "react";

const List: FC<IconProps> = ({ fill, height, width, onClick }) => (
  <IconWrapper fill={fill} height={height} width={width} onClick={onClick}>
    <path
      fillRule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    />
  </IconWrapper>
);

export default List;
