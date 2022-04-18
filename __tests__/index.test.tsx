import { render } from '@testing-library/react'
import IndexPage from 'pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    const { getByText } = render(<IndexPage />)

    expect(getByText('Hello Next.js 👋')).toBeInTheDocument()
  })
})
