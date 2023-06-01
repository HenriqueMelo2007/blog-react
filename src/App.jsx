import { Header } from "./components/header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export function App() {

  return (
    <Header />

    <Router>
      <Switch>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/" Component={Diario}></Route>
      </Switch>
    </Router>
  )
}