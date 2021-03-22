import { render, cleanup } from '@testing-library/react'
import NotFound from '../NotFound.component'
import { HashRouter } from 'react-router-dom'

describe('NotFound', () => {
  afterEach(() => {
    cleanup()
  })

  it('Snapshot', () => {
    const snapshot = render(
      <HashRouter>
        <NotFound />
      </HashRouter>
    )

    expect(snapshot).toMatchSnapshot()
  })

  it('If user ends up on this page they should see 404 and a button to return home', () => {
    const { getByText } = render(
      <HashRouter>
        <NotFound />
      </HashRouter>
    )

    expect(getByText('404 - No Page Found')).toBeInTheDocument()
    expect(getByText('Click Here to Return Home')).toBeInTheDocument()
  })
})
