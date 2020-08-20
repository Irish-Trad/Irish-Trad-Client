import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Chords from '../Chords.component'
import { HashRouter } from 'react-router-dom'

describe('Chords', () => {
  afterEach(() => {
    cleanup()
  })

  it('Snapshot', () => {
    const snapshot = render(
      <HashRouter>
        <Chords />
      </HashRouter>
    )

    expect(snapshot).toMatchSnapshot()
  })

  it('Title of the page is Chords', () => {
    const { getByText } = render(
      <HashRouter>
        <Chords />
      </HashRouter>
    )

    expect(getByText('Chords')).toBeInTheDocument()
  })
})
