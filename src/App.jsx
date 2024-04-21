import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from "./components/Menu"
import { Home, Pokemones, Detalle,  NotFound} from './layout'
import MyContextProvider from './context/MyContext'

const App = ()=> {

  return (
    <>
      <BrowserRouter>
      <MyContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Detalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </MyContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
