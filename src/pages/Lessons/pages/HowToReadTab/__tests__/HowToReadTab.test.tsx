import React from 'react'
import { render, cleanup } from '@testing-library/react'
import HowToReadTab from '../HowToReadTab.component'
import { HashRouter } from 'react-router-dom'

const renderComponent = () =>
  render(
    <HashRouter>
      <HowToReadTab />
    </HashRouter>
  )

describe('HowToReadTab', () => {
  afterEach(() => {
    cleanup()
  })

  it('Snapshot', () => {
    const snapshot = renderComponent()

    expect(snapshot).toMatchSnapshot()
  })

  it('Title of the page is How to read Tablature', () => {
    const { getByText } = renderComponent()

    expect(getByText('How to read Tablature')).toBeInTheDocument()
  })
})
