import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './assets/css/tailwind.css';
import reducers, { IApplicationState } from './reducers/rootReducer';
import Routes from './Routes';

// global state
const store = createStore<IApplicationState, any, any, any>(reducers, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Routes />
    </Provider >
  );
}

export default App;
