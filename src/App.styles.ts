import styled from 'styled-components'

export const MainContainer = styled.main`
  /* max-width: 960px; */
  /* margin: auto; */
  padding: 10px;
  /* min-height: 90vh; */

  @media screen and (min-width: 760px) {
    height: 100vh;
    overflow-y: scroll;
    padding: 0px;
    /* scrollbar-width: none; */
  }
`

export const Container = styled.main`
  @media screen and (min-width: 760px) {
    display: flex;
    flex-flow: row nowrap;
  }
`
