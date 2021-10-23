import { render, cleanup } from '@testing-library/react'
import HowToTune from 'pages/HowToTune'
import { BrowserRouter } from 'react-router-dom'

const renderComponent = () =>
  render(
    <BrowserRouter>
      <HowToTune />
    </BrowserRouter>
  )

describe('HowToTune', () => {
  afterEach(() => {
    cleanup()
  })

  it('Title of the page is How To Tune An Instrument', () => {
    const { getByText } = renderComponent()

    expect(getByText('How To Tune An Instrument')).toBeInTheDocument()
  })
})
