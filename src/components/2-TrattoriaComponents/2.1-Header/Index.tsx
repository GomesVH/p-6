import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Container } from '../../../styleGlobal'
import { RestauranteAPI } from '../../../Pages/Home'
import { open } from '../../../store/reducer/cart'
import { RootReducer } from '../../../store'

import imagemdeFundo from '../../../assets/images/fundo_cabecalho.png'
import efoodLogo from '../../../assets/images/logo.png'
import {
  BackgroundHeader,
  TituloCabecalho,
  ImagemHeroTratoria,
  UlHeader,
  DivAfter,
  HomePage
} from './stylesHeader'

export type Props = {
  heroTratoria: RestauranteAPI
}

const HeaderTrattoria = ({ heroTratoria }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <div>
      <BackgroundHeader style={{ backgroundImage: `url(${imagemdeFundo})` }}>
        <Container>
          <UlHeader>
            <HomePage to="/">
              <TituloCabecalho>Restaurantes</TituloCabecalho>
            </HomePage>
            <Link to="/">
              <img src={efoodLogo} />
            </Link>
            <TituloCabecalho onClick={openCart}>
              {items.length} Produto(s) no carrinho
            </TituloCabecalho>
          </UlHeader>
        </Container>
      </BackgroundHeader>
      <ImagemHeroTratoria
        style={{ backgroundImage: `url(${heroTratoria.capa})` }}
      >
        <Container>
          <DivAfter>
            <h2>{heroTratoria.tipo}</h2>
            <h1>{heroTratoria.titulo}</h1>
          </DivAfter>
        </Container>
      </ImagemHeroTratoria>
    </div>
  )
}

export default HeaderTrattoria
