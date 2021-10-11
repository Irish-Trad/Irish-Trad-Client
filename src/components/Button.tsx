import { HTMLProps } from 'react'
import { StyledButton } from './Button.styles'

const Button = ({ children, onClick }: HTMLProps<HTMLButtonElement>) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)

export default Button
