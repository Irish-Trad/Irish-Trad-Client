import { FC, HTMLProps } from 'react'

const Button: FC<HTMLProps<HTMLButtonElement>> = ({ children, onClick }) => (
  <button
    className='px-4 py-2 font-bold uppercase border-2 rounded-md'
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
