import { render, cleanup } from '@testing-library/react'
import Homepage from '../Homepage.component'

const renderComponent = () => render(<Homepage />)

describe('Homepage', () => {
  beforeEach(() => {
    document.body.innerHTML = "<div id='top'></div>"
  })

  afterEach(cleanup)

  it('Snapshot', () => {
    const snapshot = renderComponent()

    expect(snapshot).toMatchSnapshot()
  })

  it('Title of the page is Irish-Trad.net', () => {
    const { getByText } = renderComponent()

    expect(getByText('Irish-Trad.net')).toBeInTheDocument()
  })
})
