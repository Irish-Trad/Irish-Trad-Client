import ReactDOM from 'react-dom'
import App from './App.component'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

it('renders without crashing', () => {
  const history = createBrowserHistory()

  const div = document.createElement('div')

  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
