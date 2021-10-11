import { Link } from 'react-router-dom'

const NotFound = () => (
  <>
    <h1>404 - No Page Found</h1>
    <Link to={'/'}>
      <button>Click Here to Return Home</button>
    </Link>
  </>
)

export default NotFound
