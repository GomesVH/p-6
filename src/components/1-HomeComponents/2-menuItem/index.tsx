import starIcon from '../../../assets/images/Estrela_nota.png'
import { Paragrafo, Titulo2 } from '../../../styleGlobal'
import {
  BotesCard,
  Card,
  CardImg,
  DivBotoesCard,
  SaibaMais,
  TituloCard
} from './stylesMenuItem'

type Props = {
  image: string
  tipo: string
  title: string
  grade: string
  description: string
  id: number
}

export const MenuItem = ({
  image,
  tipo,
  description,
  grade,
  title,
  id
}: Props) => {
  const reduzTexto = (description: string) => {
    if (description.length > 230) {
      return description.slice(0, 227) + '...'
    }
    return description
  }

  return (
    <Card>
      <CardImg src={image} alt={title} />
      <DivBotoesCard>
        <BotesCard>{tipo}</BotesCard>
      </DivBotoesCard>
      <TituloCard>
        <Titulo2>{title}</Titulo2>
        <div>
          <Titulo2>{grade}</Titulo2>
          <img src={starIcon} alt="Estrela Dourada" />
        </div>
      </TituloCard>
      <Paragrafo>{reduzTexto(description)}</Paragrafo>
      <SaibaMais to={`/${id}`}>Saiba Mais</SaibaMais>
    </Card>
  )
}

export default MenuItem
