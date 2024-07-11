class CardModelTrattoria {
  image: string
  title: string
  description: string
  to?: string
  id: number

  constructor(
    id: number,
    image: string,
    title: string,
    description: string,
    to?: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.to = to
  }
}

export default CardModelTrattoria
