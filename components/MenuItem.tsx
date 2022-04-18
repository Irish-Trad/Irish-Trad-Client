import Link from 'next/link'
import { FC } from 'react'

interface Props {
  item: { path: string, label: string }
  showFullMenu: boolean
  setShowFullMenu: (param: boolean) => void
}

const MenuItem: FC<Props> = ({ item, setShowFullMenu, showFullMenu }) => (
  <Link key={item.path} href={item.path}>
    <a
      onClick={() => setShowFullMenu(!showFullMenu)}
      className='flex justify-center py-6 hover:bg-gray-900'
    >
      {item.label}
    </a>
  </Link>
)

export default MenuItem
