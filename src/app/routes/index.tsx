import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import { Dashboard, Login } from "../pages"
export const AppRoutes = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/entra" element={<Login />} />
      <Route  path='/pagina-inicial' element={<Dashboard />}/>



      {/*  Rota a baixo redireciona usuario para tela home */}
      <Route  path='*' element={<Navigate to="/pagina-inicial"/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}