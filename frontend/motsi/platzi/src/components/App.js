import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import HomePlatzi from '../pages/HomePlatzi';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import CardNew from '../pages/CardNew';
import CardDetailsContainer from '../pages/CardDetailsContainer';
import CardEdit from '../pages/CardEdit';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePlatzi} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/card/new" component={CardNew} />
          <Route exact path="/card/:cardId" component={CardDetailsContainer} />
          <Route exact path="/card/:cardId/edit" component={CardEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
