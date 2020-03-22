import React from 'react';
import ReactDOM from 'react-dom';
//storeを作成する関数
import { createStore } from 'redux'
//作成したstoreを全コンポーネントに渡す関数
import { Provider } from 'react-redux'

import reducer from './reducers'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//アプリ内の全てのstateはstoreに集約される
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
