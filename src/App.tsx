import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './assets/css/tailwind.css';
import Home from './pages/Home';
import GiftCards from './pages/GiftCards';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/giftcards" component={GiftCards} />
      </Switch>
    </Router>
  );
}

export default App;
