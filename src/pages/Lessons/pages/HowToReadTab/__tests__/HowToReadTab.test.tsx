import { render, cleanup } from '@testing-library/react'
import HowToReadTab from '..'
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

  it('Title of the page is How to read Tablature', () => {
    const { getByText } = renderComponent()

    expect(getByText('How to read Tablature')).toBeInTheDocument()
  })
})
