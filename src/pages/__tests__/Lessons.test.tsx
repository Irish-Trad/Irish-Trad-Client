import { render, cleanup } from '@testing-library/react'
import Lessons from '../Lessons/Lessons'
import { HashRouter } from 'react-router-dom'

const renderComponent = () =>
  render(
    <HashRouter>
      <Lessons />
    </HashRouter>
  )

describe('Lessons', () => {
  afterEach(() => {
    cleanup()
  })

  it('Title of the page is Lessons', () => {
    const { getByText } = renderComponent()

    expect(getByText('Lessons')).toBeInTheDocument()
  })
})
