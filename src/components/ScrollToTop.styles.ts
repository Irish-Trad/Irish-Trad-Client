import styled from 'styled-components'

export const Button = styled.button`
  display: 'block'; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 40px; /* Place the button 30px from the right */
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
  border-radius: 0.625em; /* Rounded corners */
  font-size: 1.125em; /* Increase font size */

  &:hover {
    background: linear-gradient(to bottom, darkgreen, green);
  }
`
