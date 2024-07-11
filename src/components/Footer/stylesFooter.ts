import styled from 'styled-components'
import { Paragrafo, cores } from '../../styleGlobal'

export const FooterBackground = styled.div`
  width: 100%;
  height: 290px;
  margin-top: 120px;
  background-color: ${cores.amareloFooter};
  text-align: center;
`
export const EfooImg = styled.img`
  margin-top: 40px;
`
export const Logoul = styled.ul`
  margin-top: 32px;

  img {
    margin-right: 8px;
  }
`
export const TextoFinal = styled(Paragrafo)`
  font-size: 10px;
  width: 480px;
  text-align: center;
  margin: 80px auto;
`
