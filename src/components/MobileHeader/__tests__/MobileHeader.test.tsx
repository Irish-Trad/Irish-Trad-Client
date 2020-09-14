import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
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

  it('ONLY shows title initially', () => {
    const { getByText } = render(
      <HashRouter>
        <MobileHeader />
      </HashRouter>
    )

    expect(getByText('Irish-Trad.net')).toBeInTheDocument()
  })
})
