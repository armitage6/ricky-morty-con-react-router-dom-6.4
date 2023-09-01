import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componets/Layout'
import ListPerson, { loader as loaderListPerson } from './page/ListPerson'
import InfoPerson, { loader as loaderInfoPerson } from './page/InfoPerson'
import ErrorPage from './componets/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ListPerson />,
        loader: loaderListPerson,
        errorElement: <ErrorPage />
      },
      {
        path: '/info/:personId',
        element: <InfoPerson />,
        loader: loaderInfoPerson,
        errorElement: <ErrorPage />
      }
    ]
  },
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
