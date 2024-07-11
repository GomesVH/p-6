import styled from 'styled-components'
import { breakpoints, cores } from '../../../styleGlobal'

export const ImagemHero = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`

export const LogoImage = styled.img`
  margin-top: 64px;
`
export const Titulo1Div = styled.div`
  width: 539px;
  height: 84px;
  margin-top: 260px;
  text-align: center;
  align-items: center;
`

export const Titulo1 = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${cores.rosa};
  width: 539px;
  text-align: center;
  margin: 138px auto 40px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 400px;
    font-size: 1.5em;
    margin: 120px auto 40px;
  }
`
