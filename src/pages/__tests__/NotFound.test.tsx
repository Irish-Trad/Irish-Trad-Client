import { render, cleanup } from '@testing-library/react'
import NotFound from 'pages/NotFound'
import { BrowserRouter } from 'react-router-dom'

describe('NotFound', () => {
  afterEach(() => {
    cleanup()
  })

  it('If user ends up on this page they should see 404 and a button to return home', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )

    expect(getByText('404 - Page Not Found')).toBeInTheDocument()
    expect(getByText('Click Here to Return Home')).toBeInTheDocument()
  })
})
