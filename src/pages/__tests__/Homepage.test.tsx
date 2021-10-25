import { render, cleanup } from '@testing-library/react'
import Homepage from 'pages/Homepage'

const renderComponent = () => render(<Homepage />)

describe('Homepage', () => {
  afterEach(cleanup)

  it('includes the title Irish-Trad.net', () => {
    const { getByText } = renderComponent()

    expect(getByText('Irish-Trad.net')).toBeInTheDocument()
  })
})
