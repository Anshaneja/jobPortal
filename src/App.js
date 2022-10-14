
import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
function App() {
  const routes = useRoutes([
    {path:'/' , element: <HomePage />}
  ])
  return routes;
}
function AppWrapper() {
  return(
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  )
}
export default AppWrapper;
