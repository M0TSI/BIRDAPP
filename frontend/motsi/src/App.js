import React from 'react';
import { Switch } from 'react-router-dom';
import PerfilTurista from './pages/PerfilTurista';
import Home from './pages/Home';
import Editor from './pages/Editor';
import VistaDetalle from './pages/VistaDetalle';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import CardNew from './pages/CardNew';
import SearchPage from './pages/SearchPage';
import CompraRealizada from './pages/CompraRealizada';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path='/Perfil' component={PerfilTurista}/>
      <Route exact path='/VistaDetallada' component={VistaDetalle} />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/card/edit' component={Editor} />
      <Route exact path='/card/new' component={CardNew} />
      <Route exact path='/search' component={SearchPage} />
      <Route exact path='/endpurchase' component={CompraRealizada} />
      
      <Route component={NotFound} />
    </Switch>
    
  </Router>
  );
}

export default App;
