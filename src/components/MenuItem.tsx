import { Link } from 'react-router-dom'

type Props = {
  item: { path: string; label: string }
  showFullMenu: boolean
  setShowFullMenu: (param: boolean) => void
}

const MenuItem = ({ item, setShowFullMenu, showFullMenu }: Props) => (
  <Link
    key={item.path}
    to={item.path}
    onClick={() => setShowFullMenu(!showFullMenu)}
    className="flex justify-center py-6 hover:bg-gray-900"
  >
    {item.label}
  </Link>
)

export default MenuItem
