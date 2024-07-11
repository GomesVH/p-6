import styled from 'styled-components'

import { breakpoints, cores } from '../../../styleGlobal'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  border: 2px solid ${cores.rosa};
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
`
export const DivBotoesCard = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const BotesCard = styled.div`
  background-color: ${cores.rosa};
  display: inline-block;
  font-weight: bold;
  color: ${cores.branca};
  padding: 6px 4px;
  font-size: 12px;
  margin-right: 8px;
  cursor: pointer;
`

export const CardImg = styled.img`
  width: 472px;
  height: 217px;
  position: absolute;
  top: -2px;
  left: -2px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    object-fit: cover;
  }
`
export const TituloCard = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  margin-top: 215px;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 8px;
    }
  }
`
export const SaibaMais = styled(Link)`
  background-color: ${cores.rosa};
  display: inline-block;
  font-weight: bold;
  padding: 4px 6px;
  font-size: 16px;
  margin-top: 4px;
  margin-left: 14px;
  border: none;
  color: ${cores.branca};
  text-decoration: none;
`
