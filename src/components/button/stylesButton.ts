import styled from 'styled-components'
import { cores } from '../../styleGlobal'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${cores.amareloFooter};
  border: none;
  margin-top: 8px;
  width: 100%;
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  height: 24px;
  cursor: pointer;
  border-radius: 0;
`
