import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from 'react-router-dom';

import Home from "./routes/Home.jsx";
import Materias from "./routes/Materias.jsx";
import Disciplinas from './routes/Disciplinas.jsx';
import Conteudos from './routes/Conteudos.jsx';
import Login from './routes/Login.jsx';
import Cadastro from './routes/Cadastro.jsx';
import Perfil from './routes/Perfil.jsx';
import Desempenho from './routes/Desempenho.jsx';
import Alterar_Perfil from './routes/Alterar_Perfil.jsx';
import Autenticacao from './components/Autenticacao.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Ranking from './routes/Ranking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Cadastro />,
      },
      {
        path: "materias",
        element: 
        <Autenticacao>
          <Materias />  
        </Autenticacao>
      },
      {
        path: "disciplinas/:id",
        element:         
        <Autenticacao>
          <Disciplinas />  
        </Autenticacao>
      },  
      {
        path: "ranking",
        element:         
        <Autenticacao>
          <Ranking />  
        </Autenticacao>
      },      
      {
        path: "disciplinas/conteudos/:id",
        element: 
        <Autenticacao>
          <Conteudos />  
        </Autenticacao>
      },
      {
        path: "desempenho",
        element: 
        <Autenticacao>
          <Desempenho/>
        </Autenticacao>
      },
      {
        path: "alterar",
        element: 
        <Autenticacao>
          <Alterar_Perfil />  
        </Autenticacao>
      },
      {
        path: "home",
        element: 
        <Autenticacao>
          <Home />  
        </Autenticacao>
      },
      {
        path: "login",
        element: 
        <GoogleOAuthProvider clientId='11762137153-6bc8cc0vmon7bivj4pehn2cm1elj6aj2.apps.googleusercontent.com'>
          <Login />,
        </GoogleOAuthProvider>
      },
      {
        path: "perfil",
        element: 
        <Autenticacao>
          <Perfil />  
        </Autenticacao>
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
