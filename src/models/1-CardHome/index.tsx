class PratoMenu {
  image: string
  categories: string[]
  title: string
  grade: string
  description: string
  to: string
  id: number

  constructor(
    id: number,
    image: string,
    categories: string[],
    title: string,
    grade: string,
    description: string,
    to: string
  ) {
    this.id = id
    this.image = image
    this.categories = categories
    this.title = title
    this.grade = grade
    this.description = description
    this.to = to
  }
}

export default PratoMenu
