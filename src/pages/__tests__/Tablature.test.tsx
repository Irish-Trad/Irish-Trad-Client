import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import Tablature from 'pages/Tablature'

describe('Tablature', () => {
  afterEach(() => {
    cleanup()
  })

  it('When user first visits Tab page they see GDAE tunes', () => {
    const { getByText } = render(<Tablature />)

    expect(getByText('GDAE')).toBeInTheDocument()
    expect(getByText('Barndances - GDAE')).toBeInTheDocument()
    expect(getByText('Hornpipes - GDAE')).toBeInTheDocument()
    expect(getByText('Jigs - GDAE')).toBeInTheDocument()
    expect(getByText('Marches - GDAE')).toBeInTheDocument()
    expect(getByText('Polkas - GDAE')).toBeInTheDocument()
    expect(getByText('Reels - GDAE')).toBeInTheDocument()
    expect(getByText('Slip-Jigs - GDAE')).toBeInTheDocument()
    expect(getByText('Waltzes - GDAE')).toBeInTheDocument()
  })

  it('User clicks on tuning button they will see GDAD tunes', () => {
    const { getByText, queryByText } = render(<Tablature />)

    expect(getByText('GDAE')).toBeInTheDocument()
    expect(getByText('Barndances - GDAE')).toBeInTheDocument()
    expect(getByText('Hornpipes - GDAE')).toBeInTheDocument()
    expect(getByText('Jigs - GDAE')).toBeInTheDocument()
    expect(getByText('Marches - GDAE')).toBeInTheDocument()
    expect(getByText('Polkas - GDAE')).toBeInTheDocument()
    expect(getByText('Reels - GDAE')).toBeInTheDocument()
    expect(getByText('Slip-Jigs - GDAE')).toBeInTheDocument()
    expect(getByText('Waltzes - GDAE')).toBeInTheDocument()
    expect(queryByText('GDAD')).not.toBeInTheDocument()
    expect(queryByText('Barndances - GDAD')).not.toBeInTheDocument()
    expect(queryByText('Hornpipes - GDAD')).not.toBeInTheDocument()
    expect(queryByText('Jigs - GDAD')).not.toBeInTheDocument()
    expect(queryByText('Marches - GDAD')).not.toBeInTheDocument()
    expect(queryByText('Polkas - GDAD')).not.toBeInTheDocument()
    expect(queryByText('Reels - GDAD')).not.toBeInTheDocument()
    expect(queryByText('Slip-Jigs - GDAD')).not.toBeInTheDocument()
    expect(queryByText('Waltzes - GDAD')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Toggle Tuning'))

    expect(getByText('GDAD')).toBeInTheDocument()
    expect(getByText('Barndances - GDAD')).toBeInTheDocument()
    expect(getByText('Hornpipes - GDAD')).toBeInTheDocument()
    expect(getByText('Jigs - GDAD')).toBeInTheDocument()
    expect(getByText('Marches - GDAD')).toBeInTheDocument()
    expect(getByText('Polkas - GDAD')).toBeInTheDocument()
    expect(getByText('Reels - GDAD')).toBeInTheDocument()
    expect(getByText('Slip-Jigs - GDAD')).toBeInTheDocument()
    expect(getByText('Waltzes - GDAD')).toBeInTheDocument()
    expect(queryByText('GDAE')).not.toBeInTheDocument()
    expect(queryByText('Barndances - GDAE')).not.toBeInTheDocument()
    expect(queryByText('Hornpipes - GDAE')).not.toBeInTheDocument()
    expect(queryByText('Jigs - GDAE')).not.toBeInTheDocument()
    expect(queryByText('Marches - GDAE')).not.toBeInTheDocument()
    expect(queryByText('Polkas - GDAE')).not.toBeInTheDocument()
    expect(queryByText('Reels - GDAE')).not.toBeInTheDocument()
    expect(queryByText('Slip-Jigs - GDAE')).not.toBeInTheDocument()
    expect(queryByText('Waltzes - GDAE')).not.toBeInTheDocument()
  })
})
