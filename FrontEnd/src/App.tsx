import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Colaboradores from './Pages/Colaboradores'
import Home from './Pages/Home'
import { QueryClientProvider, QueryClient } from "react-query"

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 30
      }}
    }
  )

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/colaboradores' element={<Colaboradores/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
