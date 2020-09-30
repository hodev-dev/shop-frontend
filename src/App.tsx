import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers, { IApplicationState } from './reducers/rootReducer';

// style
import './assets/css/tailwind.css';

// pages
import Home from './pages/Home';
import GiftCards from './pages/GiftCards';

// global state
const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/giftcards" component={GiftCards} />
        </Switch>
      </Router>
    </Provider >
  );
}

export default App;
