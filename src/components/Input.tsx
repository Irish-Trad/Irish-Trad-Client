import { HTMLProps } from 'react'

const Input = ({ children, ...props }: HTMLProps<HTMLInputElement>) => (
  <input
    className="px-4 py-2 border-b-2 bg-transparent text-white focus:outline-none
    "
    {...props}
  >
    {children}
  </input>
)

export default Input
