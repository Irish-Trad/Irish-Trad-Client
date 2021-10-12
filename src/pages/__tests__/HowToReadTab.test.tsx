import { render, cleanup } from '@testing-library/react'
import HowToReadTab from 'pages/HowToReadTab'
import { BrowserRouter } from 'react-router-dom'

const renderComponent = () =>
  render(
    <BrowserRouter>
      <HowToReadTab />
    </BrowserRouter>
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
