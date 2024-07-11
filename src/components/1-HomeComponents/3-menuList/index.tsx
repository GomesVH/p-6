import { RestauranteAPI } from '../../../Pages/Home'

import MenuItem from '../2-menuItem'

import { Container } from '../../../styleGlobal'
import { List } from './styleMenuList'

export type Props = {
  prato: RestauranteAPI[]
}

const MenuList = ({ prato }: Props) => (
  <Container>
    <List>
      {prato.map((pratoapedir) => (
        <MenuItem
          key={pratoapedir.id}
          image={pratoapedir.capa}
          tipo={pratoapedir.tipo}
          description={pratoapedir.descricao}
          grade={pratoapedir.avaliacao}
          title={pratoapedir.titulo}
          id={pratoapedir.id}
        />
      ))}
    </List>
  </Container>
)

export default MenuList
