import styled from 'styled-components'

export const Header = styled.header`
  height: 100vh;
  min-width: 300px;
  background-color: green;
  color: white;
  font-family: meathflfregular;
  font-size: 24px;
  flex-flow: column nowrap;

  display: none;

  @media screen and (min-width: 760px) {
    display: flex;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: linear-gradient(to bottom, green, darkgreen);
  clip-path: ellipse(100% 100% at 50% 0%);
`

export const Image = styled.img`
  margin-top: 20px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 3px solid white;
`

export const Title = styled.h1`
  font-size: 34px;
`
