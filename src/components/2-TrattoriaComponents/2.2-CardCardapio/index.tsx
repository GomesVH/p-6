import { AddButton, CardTrattoria } from './stylesCardCardapio'

type Props = {
  image?: string
  title: string
  description: string
  id: number
  onClick?: () => void
}

export const CardapioTrattoria = ({
  image,
  title,
  description,
  onClick
}: Props) => {
  const reduzTexto = (description: string) => {
    if (description.length > 130) {
      return description.slice(0, 130) + '...'
    }
    return description
  }
  return (
    <CardTrattoria onClick={onClick}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{reduzTexto(description)}</p>
      <AddButton>Mais Detalhes</AddButton>
    </CardTrattoria>
  )
}

export default CardapioTrattoria
