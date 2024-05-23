import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/stores/store';
import App from './App.tsx';
import { name as appName } from './app.json';


const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);

export default ReduxApp;
