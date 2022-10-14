
import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import HomePage from './Pages/HomePage';
function App() {
  const routes = useRoutes([
    {path:'/' , element: <HomePage />},
    {path:'/search', element: <SearchPage/>}
  ])
  return routes;
  // return (
  //   <Routes>
  //     <Route path='/' exact element={HomePage} />
  //     <Route path='/search' exact element={SearchPage}/>
  //   </Routes>
  // );
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
