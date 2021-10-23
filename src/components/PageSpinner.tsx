import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PageSpinner = () => (
  <div className="h-screen w-screen flex justify-center items-center text-9xl">
    <FontAwesomeIcon className="" icon={['fas', 'spinner']} spin />
  </div>
)

export default PageSpinner
