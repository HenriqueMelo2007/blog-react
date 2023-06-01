import { Header } from "./components/header";
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/home/home";
import { Diario } from "./pages/diario/diario";

export function App() {

  return (
    <div>
      <Header />
  
      <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/diario" Component={Diario}></Route>
      </Routes>
      
    </div>
  )
}