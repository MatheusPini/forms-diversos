import './App.css'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/sidebar'

export default function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <p>fotter</p>

    </>
  )
}
