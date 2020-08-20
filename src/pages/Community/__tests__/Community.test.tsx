import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Community from '../Community.component'

const renderComponent = () => render(<Community />)

describe('Community', () => {
  afterEach(() => {
    cleanup()
  })

  it('Snapshot', () => {
    const snapshot = renderComponent()

    expect(snapshot).toMatchSnapshot()
  })

  it('Title of the page is Community', () => {
    const { getByText } = renderComponent()

    expect(getByText('Community')).toBeInTheDocument()
  })
})
