import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootStore from './store/rootStore';
import { sessionInitAction } from './store/actions/sessionActions';
import KeycloakService from "./services/KeycloakService"

rootStore.dispatch(sessionInitAction())

const renderApp = () => ReactDOM.render(
  <React.StrictMode>
    <Provider store={ rootStore }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

KeycloakService.initKeycloak(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
