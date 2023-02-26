import type { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ ...props }) => (
  <button className="bg-gray-900 text-white p-2 rounded border w-full">
    {props.children}
  </button>
);

export default Button;
