import MenuMobile from 'components/MenuMobile'
import MenuDesktop from 'components/MenuDesktop'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const MainLayout = ({ children }: Props) => (
  <div className="flex flex-col">
    <MenuMobile />
    <div className="flex">
      <MenuDesktop />
      {children}
    </div>
  </div>
)

export default MainLayout
