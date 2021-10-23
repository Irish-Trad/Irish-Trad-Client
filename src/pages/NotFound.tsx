import Page from 'components/Page'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <Page header="404 - Page Not Found">
    <Link to={'/'}>
      <button>Click Here to Return Home</button>
    </Link>
  </Page>
)

export default NotFound
