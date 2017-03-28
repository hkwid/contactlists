import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import './index.css';
import configureStore from './redux/configureStore'

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
