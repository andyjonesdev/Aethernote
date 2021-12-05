import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import { useDispatch, useSelector } from "react-redux";

import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(state => {
    if (state.session.user != null) {
      return state.session.user.username
    } else return 'no user session recognized'
  })

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <Switch>
      <Route path='/login'>
        <LoginFormPage />
      </Route>
      <Route path='/' exact>
        <>
          <div>Splash Page</div>
          <div>User: {user}</div>
        </>
      </Route>
    </Switch>
  );
}

export default App;
