import { FC, ReactNode } from 'react'

interface Props {
  header?: string
  children: ReactNode
}

const Page: FC<Props> = ({ header, children }) => (
  <div className='flex flex-col items-center w-full h-screen pt-16 overflow-auto lg:pt-0'>
    {header !== '' && <h1>{header}</h1>}
    <section className='flex flex-col justify-center lg:max-w-5xl'>
      {children}
    </section>
  </div>
)

export default Page
