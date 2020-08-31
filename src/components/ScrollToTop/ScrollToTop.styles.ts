import styled from 'styled-components'

export const Button = styled.button`
  display: 'block'; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background: linear-gradient(
    to bottom,
    green,
    darkgreen
  ); /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */

  &:hover {
    background: rgba(0, 100, 0, 0.15); /* Add a dark-grey background on hover */
  }
`
