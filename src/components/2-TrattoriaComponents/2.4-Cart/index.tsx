import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../../store'
import { close, remove, clear } from '../../../store/reducer/cart'
import { formataPreco } from '../2.3-CardListCardapio'
import { usePurchaseMutation } from '../../../services/api'

import {
  CardContainer,
  Overlay,
  SideBar,
  OrderContainer,
  PriceContainer,
  ContinueButton,
  TagInput,
  TagInputField,
  InputField,
  CheckoutButton,
  DivInput,
  InfoContainer,
  DivInputCard
} from './stylesCart'
import trashIcon from '../../../assets/images/trashIcon.png'
import Button from '../../button'

const Checkout = () => {
  const [cartItems, setCartItems] = useState(true)
  const [checkoutInfo, setCheckoutInfo] = useState(true)
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, selectedItem) => {
      if (selectedItem.preco) {
        return (acumulador += selectedItem.preco)
      } else {
        return 0
      }
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      name: '',
      numberCard: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é Obrigatório'),
      description: Yup.string().required(),
      city: Yup.string().required(),
      zipCode: Yup.string().required(),
      number: Yup.string().required(),
      name: Yup.string()
        .min(5, 'O CEP precisa ter pelo menos 5 caracteres')
        .required('O campo é Obrigatório'),
      numberCard: Yup.string().required(),
      code: Yup.string().required(),
      month: Yup.string().required(),
      year: Yup.string().required()
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.name,
            number: values.numberCard,
            code: Number(values.code),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length < 1 && !isSuccess ? (
          <TagInput>O Carrinho está vazio</TagInput>
        ) : (
          <>
            {isSuccess && data ? (
              <>
                <TagInput>Pedido realizado - {data.orderId}</TagInput>
                <TagInputField>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                    <br />
                    <br />
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras. <br />
                    <br />
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                    <br />
                    <br />
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                  <Link to={'/'}>
                    <ContinueButton onClick={closeCart}>
                      Concluir
                    </ContinueButton>
                  </Link>
                </TagInputField>
              </>
            ) : (
              <form onSubmit={form.handleSubmit}>
                {cartItems ? (
                  <>
                    {items.map((item) => (
                      <OrderContainer key={item.id}>
                        <div>
                          <img src={item.foto} />
                          <div>
                            <h4>{item.nome}</h4>
                            <p>{formataPreco(item.preco)}</p>
                          </div>
                        </div>
                        <img
                          src={trashIcon}
                          onClick={() => removeItem(item.id)}
                        />
                      </OrderContainer>
                    ))}
                    <PriceContainer>
                      <h5>Valor Total</h5>
                      <h5>{formataPreco(getTotalPrice())}</h5>
                    </PriceContainer>
                    <ContinueButton onClick={() => setCartItems(false)}>
                      Continuar com a entrega
                    </ContinueButton>
                  </>
                ) : (
                  <>
                    {checkoutInfo ? (
                      <>
                        <TagInput>Entrega</TagInput>
                        <InfoContainer>
                          <TagInputField htmlFor="receiver">
                            Quem irá Receber:
                          </TagInputField>
                          <InputField>
                            <input
                              id="receiver"
                              type="text"
                              name="receiver"
                              value={form.values.receiver}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('receiver') ? 'error' : ''
                              }
                            />
                          </InputField>
                          <TagInputField htmlFor="description">
                            Endereço:
                          </TagInputField>
                          <InputField>
                            <input
                              id="description"
                              type="text"
                              name="description"
                              value={form.values.description}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('description') ? 'error' : ''
                              }
                            />
                          </InputField>
                          <TagInputField htmlFor="city">Cidade:</TagInputField>
                          <InputField>
                            <input
                              id="city"
                              type="text"
                              name="city"
                              value={form.values.city}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('city') ? 'error' : ''
                              }
                            />
                          </InputField>

                          <DivInput>
                            <nav>
                              <TagInputField htmlFor="zipCode">
                                CEP:
                              </TagInputField>
                              <InputField>
                                <InputMask
                                  id="zipCode"
                                  type="text"
                                  name="zipCode"
                                  mask="99999-999"
                                  value={form.values.zipCode}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('zipCode') ? 'error' : ''
                                  }
                                />
                              </InputField>
                            </nav>
                            <nav>
                              <TagInputField htmlFor="number">
                                Número:
                              </TagInputField>
                              <InputField>
                                <input
                                  id="number"
                                  type="text"
                                  name="number"
                                  value={form.values.number}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('number') ? 'error' : ''
                                  }
                                />
                              </InputField>
                            </nav>
                          </DivInput>
                          <TagInputField htmlFor="complement">
                            complemento (opcional)
                          </TagInputField>
                          <InputField>
                            <input
                              id="complement"
                              type="text"
                              name="complement"
                              value={form.values.complement}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                            />
                          </InputField>
                        </InfoContainer>
                        <CheckoutButton
                          type="button"
                          onClick={() => {
                            // Verifica se todos os campos obrigatórios foram tocados
                            const allTouched =
                              form.touched.receiver &&
                              form.touched.description &&
                              form.touched.city &&
                              form.touched.zipCode &&
                              form.touched.number

                            const anyError =
                              form.errors.receiver ||
                              form.errors.description ||
                              form.errors.city ||
                              form.errors.zipCode ||
                              form.errors.number

                            if (!allTouched || anyError) {
                              form.setTouched({
                                receiver: true,
                                description: true,
                                city: true,
                                zipCode: true,
                                number: true
                              })
                            } else {
                              setCheckoutInfo(false)
                            }
                          }}
                        >
                          Continuar com pagamento
                        </CheckoutButton>
                        <CheckoutButton
                          type="button"
                          onClick={() => setCartItems(true)}
                        >
                          Voltar para o carrinho
                        </CheckoutButton>
                      </>
                    ) : (
                      <>
                        <TagInput>
                          Pagamento - Valor {formataPreco(getTotalPrice())}
                        </TagInput>
                        <InfoContainer>
                          <TagInputField htmlFor="name">
                            Nome no cartão
                          </TagInputField>
                          <InputField>
                            <input
                              id="name"
                              type="text"
                              name="name"
                              value={form.values.name}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('name') ? 'error' : ''
                              }
                            />
                          </InputField>
                          <DivInputCard>
                            <nav className="nav1">
                              <TagInputField htmlFor="numberCard">
                                Numero do cartão
                              </TagInputField>
                              <InputField>
                                <InputMask
                                  id="numberCard"
                                  type="text"
                                  name="numberCard"
                                  mask="9999 9999 9999 9999"
                                  value={form.values.numberCard}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('numberCard')
                                      ? 'error'
                                      : ''
                                  }
                                />
                              </InputField>
                            </nav>
                            <nav className="nav2">
                              <TagInputField htmlFor="code">CVV</TagInputField>
                              <InputField>
                                <InputMask
                                  id="code"
                                  type="text"
                                  name="code"
                                  mask="999"
                                  value={form.values.code}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('code') ? 'error' : ''
                                  }
                                />
                              </InputField>
                            </nav>
                          </DivInputCard>
                          <DivInputCard>
                            <nav className="nav3">
                              <TagInputField htmlFor="month">
                                Mes de Vencimento
                              </TagInputField>
                              <InputField>
                                <InputMask
                                  id="month"
                                  type="text"
                                  name="month"
                                  mask="99"
                                  value={form.values.month}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('month') ? 'error' : ''
                                  }
                                />
                              </InputField>
                            </nav>
                            <nav className="nav4">
                              <TagInputField htmlFor="year">
                                Ano de Vencimento
                              </TagInputField>
                              <InputField>
                                <InputMask
                                  id="year"
                                  type="text"
                                  name="year"
                                  mask="9999"
                                  value={form.values.year}
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  className={
                                    checkInputHasError('year') ? 'error' : ''
                                  }
                                />
                              </InputField>
                            </nav>
                          </DivInputCard>
                        </InfoContainer>
                        <Button
                          type="submit"
                          onClick={() => {
                            form.setTouched(
                              {
                                receiver: true,
                                description: true,
                                city: true,
                                zipCode: true,
                                number: true,
                                name: true,
                                numberCard: true,
                                code: true,
                                month: true,
                                year: true
                              },
                              true
                            )
                            if (!Object.keys(form.errors).length) {
                              form.handleSubmit()
                            }
                          }}
                          title="Finalizar pagamento"
                        >
                          Finalizar Pagamento
                        </Button>

                        <CheckoutButton
                          type="button"
                          onClick={() => setCheckoutInfo(true)}
                        >
                          Voltar para edição de endereço
                        </CheckoutButton>
                      </>
                    )}
                  </>
                )}
              </form>
            )}
          </>
        )}
      </SideBar>
    </CardContainer>
  )
}

export default Checkout
