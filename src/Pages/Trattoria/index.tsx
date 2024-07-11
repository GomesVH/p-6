import { useParams } from 'react-router-dom'

import HeaderTrattoria from '../../components/2-TrattoriaComponents/2.1-Header/Index'
import MenuTrattoria from '../../components/2-TrattoriaComponents/2.3-CardListCardapio'
import Footer from '../../components/Footer'
import Checkout from '../../components/2-TrattoriaComponents/2.4-Cart'

import { useGetHeaderQuery, useGetMenuQuery } from '../../services/api'

const Trattoria = () => {
  const { id } = useParams()
  const { data: tratoriaHead } = useGetHeaderQuery(id!)
  const { data: restaurantes } = useGetMenuQuery(id!)

  if (tratoriaHead && restaurantes) {
    return (
      <>
        <HeaderTrattoria heroTratoria={tratoriaHead} />
        <MenuTrattoria opcoesRestaurate={restaurantes} />
        <Checkout />
        <Footer />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Trattoria
