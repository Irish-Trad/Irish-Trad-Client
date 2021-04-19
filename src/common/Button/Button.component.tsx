import { ReactNode } from 'react'
import { StyledButton } from './Button.styles'

type Props = {
  children?: ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: Props) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)

export default Button
