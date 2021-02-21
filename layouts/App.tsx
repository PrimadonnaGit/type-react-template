import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogIn from '@pages/Login';
import SignUp from '@pages/Signup';

function App() {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}

export default App;
