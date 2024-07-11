// use effect do home, headerTroria e MenuTrattoria
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, RestauranteAPI } from '../Pages/Home'

type Produto = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Produto[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getHome: builder.query<RestauranteAPI[], void>({
      query: () => ''
    }),
    getHeader: builder.query<RestauranteAPI, string>({
      query: (id) => `/${id}`
    }),
    getMenu: builder.query<Cardapio[], string>({
      query: (id) => `/${id}`,
      transformResponse: (response: RestauranteAPI) => response.cardapio
    }),

    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'https://fake-api-tau.vercel.app/api/efood/checkout',
        method: 'POST',
        body: body
      })
    })
  })
})

export const {
  useGetHomeQuery,
  useGetHeaderQuery,
  useGetMenuQuery,
  usePurchaseMutation
} = api

export default api
