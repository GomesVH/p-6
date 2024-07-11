import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Trattoria from './Pages/Trattoria'

const Rotas = () => (
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="/:id" element={<Trattoria />} />
  </Routes>
)

export default Rotas
