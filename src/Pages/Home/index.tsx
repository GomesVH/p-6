import { useEffect, useState } from 'react'

import HeroCabecalho from '../../components/1-HomeComponents/1-Hero'
import MenuList from '../../components/1-HomeComponents/3-menuList'
import Footer from '../../components/Footer'
import { Container } from '../../styleGlobal'

import { useGetHomeQuery } from '../../services/api'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface RestauranteAPI {
  id: number
  titulo: string
  destacado?: boolean
  avaliacao: string
  tipo: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurantes } = useGetHomeQuery()

  // const [restaurantes, setRestaurantes] = useState<RestauranteAPI[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res) => setRestaurantes(res))
  // }, [])

  if (!restaurantes) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <HeroCabecalho />
      <MenuList prato={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
