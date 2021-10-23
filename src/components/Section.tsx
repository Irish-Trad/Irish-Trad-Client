import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Section = ({ children }: Props) => (
  <section className="p-4">{children}</section>
)

export default Section
