import React from 'react'
import { render, cleanup } from '@testing-library/react'
import HowToString from '../HowToString.component'
import { HashRouter } from 'react-router-dom'

const renderComponent = () =>
  render(
    <HashRouter>
      <HowToString />
    </HashRouter>
  )

describe('HowToString', () => {
  afterEach(() => {
    cleanup()
  })

  it('Snapshot', () => {
    const snapshot = renderComponent()

    expect(snapshot).toMatchSnapshot()
  })

  it('Title of the page is How To String An Instrument', () => {
    const { getByText } = renderComponent()

    expect(getByText('How To String An Instrument')).toBeInTheDocument()
  })
})
