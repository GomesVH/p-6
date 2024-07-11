import { ButtonContainer } from './stylesButton'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void //aqui ta permitindo receber uma função que não tem argumentos
  children?: string //aqui é o texto dentro do botão (pode ser qualquer nome, é só uma variável)
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  onClick,
  children,
  disabled,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return <h4>Carregando</h4>
}

export default Button
