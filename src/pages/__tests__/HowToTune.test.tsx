import { render, cleanup } from '@testing-library/react'
import HowToTune from '../HowToTune'
import { HashRouter } from 'react-router-dom'

const renderComponent = () =>
  render(
    <HashRouter>
      <HowToTune />
    </HashRouter>
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
