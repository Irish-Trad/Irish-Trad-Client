import { useState } from 'react'
import MenuItem from 'components/MenuItem'
import { Link } from 'react-router-dom'

type Props = {
  showFullMenu: boolean
  setShowFullMenu: (param: boolean) => void
}

const items = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/tablature',
    label: 'Tablature',
  },
  {
    path: '/lessons',
    label: 'Lessons',
  },
  {
    path: '/chords',
    label: 'Chords',
  },
  {
    path: '/clef-to-tab',
    label: 'Clef To TAB',
  },
  {
    path: '/terminology',
    label: 'Terminology',
  },
  {
    path: '/community',
    label: 'Community',
  },
  {
    path: '/newsletter',
    label: 'Newsletter',
  },
]

const FullMobileMenu = ({ showFullMenu, setShowFullMenu }: Props) => (
  <div className="bg-gray-700 fixed w-screen h-screen flex flex-col">
    <div className="flex justify-end py-6 pr-4 pt-2 text-2xl">
      <p onClick={() => setShowFullMenu(!showFullMenu)}>X</p>
    </div>
    <div className="overflow-auto">
      {items.map((item) => (
        <MenuItem
          item={item}
          setShowFullMenu={setShowFullMenu}
          showFullMenu={showFullMenu}
        />
      ))}
    </div>
  </div>
)

const MobileMenu = () => {
  const [showFullMenu, setShowFullMenu] = useState<boolean>(false)

  return (
    <>
      <div className="flex justify-between items-center bg-gray-700 h-14 lg:hidden px-4">
        <Link to={'/'} className="text-white">
          Irish-Trad.net
        </Link>
        <div
          className="text-white"
          onClick={() => setShowFullMenu(!showFullMenu)}
        >
          Hamburger
        </div>
      </div>
      {showFullMenu && (
        <FullMobileMenu
          showFullMenu={showFullMenu}
          setShowFullMenu={setShowFullMenu}
        />
      )}
    </>
  )
}

export default MobileMenu
