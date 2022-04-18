import MenuItem from 'components/MenuItem'
import { FC } from 'react'
import menuItems from 'utils/menuItems'

interface Props {
  showFullMenu: boolean
  setShowFullMenu: (param: boolean) => void
}

const MenuMobileFull: FC<Props> = ({ showFullMenu, setShowFullMenu }) => (
  <div
    className='fixed flex flex-col justify-center w-screen h-screen bg-gray-700'
    style={{ zIndex: 1 }}
  >
    {/* <div className="flex justify-end py-6 pt-2 pr-4 text-2xl"> */}
    <p
      className='absolute top-0 text-white cursor-pointer right-4'
      onClick={() => setShowFullMenu(!showFullMenu)}
    >
      X
    </p>
    {/* </div> */}
    <div className='overflow-auto'>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          item={item}
          setShowFullMenu={setShowFullMenu}
          showFullMenu={showFullMenu}
        />
      ))}
    </div>
  </div>
)

export default MenuMobileFull
