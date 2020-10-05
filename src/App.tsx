import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// style
import './assets/css/tailwind.css';
import AdminDashboard from './pages/admin/AdminDashboard';
import GiftCards from './pages/GiftCards';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import reducers, { IApplicationState } from './reducers/rootReducer';

// global state
const store = createStore<IApplicationState, any, any, any>(reducers, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/giftcards" component={GiftCards} />
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
      </Router>
    </Provider >
  );
}

export default App;
