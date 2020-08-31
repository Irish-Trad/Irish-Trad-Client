import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import MobileHeader from '../MobileHeader.component'

describe('MobileHeader', () => {
  afterEach(() => {
    cleanup()
  })

  it('Snapshot', () => {
    const snapshot = render(
      <HashRouter>
        <MobileHeader />
      </HashRouter>
    )

    expect(snapshot).toMatchSnapshot()
  })

  it('MobileHeader should render all possible tabs', () => {
    const { getByText } = render(
      <HashRouter>
        <MobileHeader />
      </HashRouter>
    )

    expect(getByText('Irish-Trad.net')).toBeInTheDocument()
    expect(getByText('Tablature')).toBeInTheDocument()
    expect(getByText('Lessons')).toBeInTheDocument()
    expect(getByText('Chords')).toBeInTheDocument()
    expect(getByText('Clef to TAB')).toBeInTheDocument()
    expect(getByText('Terminology')).toBeInTheDocument()
    expect(getByText('Community')).toBeInTheDocument()
    expect(getByText('Newsletter')).toBeInTheDocument()
  })
})
