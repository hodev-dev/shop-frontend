import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// style
import './assets/css/tailwind.css';
import GiftCards from './pages/GiftCards';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import reducers, { IApplicationState } from './reducers/rootReducer';




// global state
const store = createStore<IApplicationState, any, any, any>(reducers, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/giftcards" component={GiftCards} />
        </Switch>
      </Router>
    </Provider >
  );
}

export default App;
