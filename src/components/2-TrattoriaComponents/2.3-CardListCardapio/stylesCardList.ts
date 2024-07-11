import { styled, keyframes } from 'styled-components'
import { breakpoints, cores } from '../../../styleGlobal'
import { AddButton } from '../2.2-CardCardapio/stylesCardCardapio'

export const TrattoriaList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-right: 5%;
    margin-left: 5%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
export const ModalCard = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModelContainer = styled.div`
  display: block;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  > img {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.rosa};
  width: 1024px;
  height: 344px;
  display: flex;
  color: ${cores.branca};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    height: 550px;
  }

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin: 32px 24px 32px 32px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 60%;
      height: 40%;
      margin: 12px 20%;
    }
  }

  div {
    margin: 32px 24px 24px 0;

    @media (max-width: ${breakpoints.mobile}) {
      margin: 0 10%;
    }
    p {
      margin: 8px 0;
      text-align: justify;

      @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin-right: px;
      }
    }
  }
`

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const AddButtonModal = styled(AddButton)`
  width: 218px;
  border-radius: 0;
  bottom: 24px;

  &.pulse-animation {
    animation: ${pulse} 0.2s;
  }

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 12px;
  }
`
