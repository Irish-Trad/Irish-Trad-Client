import { FC, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ children, onClick }) => (
  <button
    className='px-4 py-2 font-bold uppercase border-2 rounded-md'
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
