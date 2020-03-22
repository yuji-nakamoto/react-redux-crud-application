import React from 'react';
import ReactDOM from 'react-dom';
//storeを作成する関数、thunkはmiddlewareなので適用する関数を呼び出す
import { createStore, applyMiddleware } from 'redux'
//作成したstoreを全コンポーネントに渡す関数
import { Provider } from 'react-redux'
//非同期処理を行うライブラリ
import thunk from 'redux-thunk'

import reducer from './reducers'
import './index.css';
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

//アプリ内の全てのstateはstoreに集約される
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
