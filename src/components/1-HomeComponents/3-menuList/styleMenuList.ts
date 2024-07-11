import styled from 'styled-components'
import { breakpoints } from '../../../styleGlobal'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 80px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-left: 10%;
  }
`
