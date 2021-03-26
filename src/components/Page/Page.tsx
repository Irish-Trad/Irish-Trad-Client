import { ReactNode, forwardRef } from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  children: ReactNode
  title: string
}

const Page = forwardRef(
  ({ children, title = '', ...rest }: Props, ref: any) => (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  )
)

export default Page
