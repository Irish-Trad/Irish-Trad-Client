import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuMobileFull from './MenuMobileFull'

const MenuMobile = () => {
  const [showFullMenu, setShowFullMenu] = useState(false)
  // const [navBackground, setNavBackground] = useState('bg-transparent')

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY >= 100
  //     if (show) {
  //       setNavBackground('bg-white')
  //     } else {
  //       setNavBackground('bg-transparent')
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll)

  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <>
      <div
        className={`flex justify-between items-center fixed h-14 w-screen bg-transparent px-4 lg:hidden`}
      >
        <Link to={'/'} className="text-white">
          Irish-Trad.net
        </Link>
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={() => setShowFullMenu(!showFullMenu)}
          icon={['fas', 'bars']}
        />
      </div>
      {showFullMenu && (
        <MenuMobileFull
          showFullMenu={showFullMenu}
          setShowFullMenu={setShowFullMenu}
        />
      )}
    </>
  )
}

export default MenuMobile
