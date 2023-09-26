import './App.css'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/sidebar'
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
export default function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <p>fotter</p>

    </>
  )
}
