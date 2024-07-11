import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { useEffect } from 'react'

import { GlobalCSS } from './styleGlobal'
import Rotas from './routes'
import { store } from './store'

function App() {
  useEffect(() => {
    const handleWheel = (event: {
      ctrlKey: any
      preventDefault: () => void
    }) => {
      if (event.ctrlKey) {
        event.preventDefault()
      }
    }

    const handleKeyDown = (event: {
      ctrlKey: any
      key: string
      preventDefault: () => void
    }) => {
      if (
        (event.ctrlKey &&
          (event.key === '+' || event.key === '-' || event.key === '0')) ||
        event.key === 'F11'
      ) {
        event.preventDefault()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
