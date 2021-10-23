import { ReactNode } from 'react'

type Props = {
  header?: string
  children: ReactNode
}

const Page = ({ header, children }: Props) => (
  <div className="flex flex-col w-full h-screen overflow-auto items-center pt-16 lg:pt-0">
    {header && <h1>{header}</h1>}
    <section className="flex flex-col justify-center lg:max-w-5xl">
      {children}
    </section>
  </div>
)

export default Page
