import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import * as authActions from './actions/authAction';
import './assets/css/tailwind.css';
import ProtectedRoute from './components/Logics/ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCollections from './pages/admin/collections/AdminCollections';
import AdminGames from './pages/admin/games/AdminGames';
import Games from './pages/Games';
import GiftCards from './pages/GiftCards';
import Home from './pages/Home';
import Login from './pages/Login';
import { IApplicationState } from './reducers/rootReducer';


const Routes = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, isLoggedIn } = useSelector((store: IApplicationState) => store.authReducer);

  useEffect(() => {
    dispatch(authActions.setLoading(true));
  }, [dispatch])

  useEffect(() => {
    if (isLoading) {
      dispatch(authActions.auth_status())
    }
  }, [isLoading, isLoggedIn, dispatch, history])

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/giftcards" component={GiftCards} />
          <Route path="/games" component={Games} />
          <ProtectedRoute isLoading={isLoading} isLoggedIn={isLoggedIn}>
            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/admin/games" component={AdminGames} />
            <Route path="/admin/collections" component={AdminCollections} />
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  )
}

export default Routes
