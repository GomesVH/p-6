import styled from 'styled-components'
import { Titulo2, breakpoints, cores } from '../../../styleGlobal'
import { Link } from 'react-router-dom'

export const BackgroundHeader = styled.div`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  position: absolute;
  top: 0;

  @media (max-width: ${breakpoints.mobile}) {
    img {
      width: 70%;
    }
  }
`
export const UlHeader = styled.ul`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TituloCabecalho = styled(Titulo2)`
  margin: 2px;
  width: 150px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8em;
    width: 80px;
  }
`
export const ImagemHeroTratoria = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 186px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${cores.preto};
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.5;
  }
`

export const DivAfter = styled.div`
  position: relative;
  color: #eee;

  h2 {
    position: absolute;
    top: 25px;
    font-size: 32px;
    font-weight: 100;
    line-height: 37.5px;
    width: 101px;
  }

  h1 {
    position: absolute;
    top: 214.75px;
    font-size: 32px;
    font-weight: 900;
    line-height: 37.5px;
  }
`

export const HomePage = styled(Link)`
  text-decoration: none;
`
