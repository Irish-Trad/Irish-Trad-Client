import { render, cleanup } from '@testing-library/react'
import HowToString from 'pages/HowToString'
import { BrowserRouter } from 'react-router-dom'

const renderComponent = () =>
  render(
    <BrowserRouter>
      <HowToString />
    </BrowserRouter>
  )

describe('HowToString', () => {
  afterEach(() => {
    cleanup()
  })

  it('Title of the page is How To String An Instrument', () => {
    const { getByText } = renderComponent()

    expect(getByText('How To String An Instrument')).toBeInTheDocument()
  })
})
