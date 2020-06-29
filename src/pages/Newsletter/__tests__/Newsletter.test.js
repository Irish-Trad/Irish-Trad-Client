import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Newsletter from '../Newsletter.component'

describe('Newsletter', () => {
  afterEach(() => {
    cleanup()
  })

  it('Snapshot', () => {
    const snapshot = render(<Newsletter />)

    expect(snapshot).toMatchSnapshot()
  })

  it('Title of the page is Newsletter', () => {
    const { getByText } = render(<Newsletter />)

    expect(getByText('Newsletter')).toBeInTheDocument()
  })
})
