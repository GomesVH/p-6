import styled from 'styled-components'
import { cores } from '../../../styleGlobal'
import { AddButton } from '../2.2-CardCardapio/stylesCardCardapio'

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
`

export const SideBar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;


  }
`

export const OrderContainer = styled.div`
  background-color: ${cores.amareloFooter};
  position: relative;
  margin-bottom: 16px;

  div {
    display: flex;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      margin: 8px;
    }

    div {
      display: block;
      color: ${cores.rosa};
      margin-top: 8px;

      h4 {
        font-weight: 900;
        font-size: 18px;
        margin-bottom: 16px;
      }
    }
  }

  > img {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const PriceContainer = styled.div`
  color: ${cores.amareloFooter};
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  h5 {
    font-size: 14px;
    font-weight: bold;
  }
`

export const ContinueButton = styled(AddButton)`
  position: initial;
  border-radius: 0;
  width: 100%;
  margin: 16px 0px;
`

export const TagInput = styled.label`
  color: ${cores.amareloFooter};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
`
export const InfoContainer = styled.div`
  margin: 16px 0;
`
export const DivInput = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DivInputCard = styled.div`
  display: flex;
  .nav1 {
    width: 70%;
    margin-right: 5%;
  }
  .nav2 {
    width: 25%;
  }
  .nav3 {
    width: 47%;
    margin-right: 5%;
  }
  .nav4 {
    width: 48%;
  }
`

export const TagInputField = styled(TagInput)`
  margin-bottom: 8px;
  p {
    margin-top: 16px;
    margin-bottom: 24px;
    font-weight: 400;
    text-align: justify;
  }
`
export const InputField = styled.div`
  input {
    height: 32px;
    width: 100%;
    background-color: ${cores.amareloFooter};
    border: none;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 14px;
    padding-left: 4px;

    &.error {
      border: 2px solid yellow;
    }
  }
`
export const CheckoutButton = styled(ContinueButton)`
  margin: 0;
  margin-top: 8px;
`
