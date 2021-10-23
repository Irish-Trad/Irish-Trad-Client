import { render, cleanup } from '@testing-library/react'
import Homepage from 'pages/Homepage'

const renderComponent = () => render(<Homepage />)

describe('Homepage', () => {
  beforeEach(() => {
    document.body.innerHTML = "<div id='top'></div>"
  })

  afterEach(cleanup)

  it('includes the title Irish-Trad.net', () => {
    const { getByText } = renderComponent()

    expect(getByText('Irish-Trad.net')).toBeInTheDocument()
  })

  it('includes a section for each page', () => {
    const { getByText } = renderComponent()

    expect(getByText('Introduction')).toBeInTheDocument()
    expect(getByText('Lessons')).toBeInTheDocument()
    expect(getByText('Chords')).toBeInTheDocument()
    expect(getByText('Clef to TAB')).toBeInTheDocument()
    expect(getByText('Terminology')).toBeInTheDocument()
  })
})
