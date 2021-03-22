import { render, cleanup } from '@testing-library/react'
import Lessons from '../Lessons.component'
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

  it('Snapshot', () => {
    const snapshot = renderComponent()

    expect(snapshot).toMatchSnapshot()
  })

  it('Title of the page is Lessons', () => {
    const { getByText } = renderComponent()

    expect(getByText('Lessons')).toBeInTheDocument()
  })
})
