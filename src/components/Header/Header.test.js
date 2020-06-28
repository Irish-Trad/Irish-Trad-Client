import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import Header from './Header.component'

describe('Header', () => {
  afterEach(() => {
    cleanup()
  })

  it('Header should render all possible tabs', () => {
    const { getByText } = render(
      <HashRouter>
        <Header />
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
