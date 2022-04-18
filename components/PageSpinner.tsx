import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

const PageSpinner: FC = () => (
  <div className='flex items-center justify-center w-screen h-screen text-9xl'>
    <FontAwesomeIcon icon='spinner' spin />
  </div>
)

export default PageSpinner
