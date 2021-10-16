import { HTMLProps } from 'react'

const Button = ({ children, onClick }: HTMLProps<HTMLButtonElement>) => (
  <button
    className="px-4 py-2 border-2 rounded-md uppercase font-bold"
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
