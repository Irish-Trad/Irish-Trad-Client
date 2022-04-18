import { FC, HTMLProps } from 'react'

const Input: FC<HTMLProps<HTMLInputElement>> = ({ children, ...props }) => (
  <input
    className='px-4 py-2 text-white bg-transparent border-b-2 focus:outline-none '
    {...props}
  >
    {children}
  </input>
)

export default Input
