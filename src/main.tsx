import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './pages/dashboard.tsx'
import { Form1 } from './pages/form1.tsx'
import App from './App.tsx'
import { ErrorPage } from './pages/errorPage.tsx'
import { Detalhes } from './pages/detalhes.tsx'
import { Detalhes2 } from './pages/detalhes2.tsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />
//   },
//   {
//     path: "/form1",
//     element: <Form1 />
//   },
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "form1",
        element: <Form1 />
      },
      {
        path: "detalhes",
        element: <Detalhes />
      },
      {
        path: "/detalhes/:id",
        element: <Detalhes2 />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
