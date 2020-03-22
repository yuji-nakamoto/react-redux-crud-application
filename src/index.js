import React from 'react';
import ReactDOM from 'react-dom';
//storeを作成する関数、thunkはmiddlewareなので適用する関数を呼び出す
import { createStore, applyMiddleware } from 'redux'
//作成したstoreを全コンポーネントに渡す関数
import { Provider } from 'react-redux'
//非同期処理を行うライブラリ
import thunk from 'redux-thunk'
//routerでラップするライブラリ
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//デバッグするためためのライブラリ
import { composeWithDevTools } from 'redux-devtools-extension'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducer from './reducers'
import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

//開発環境においてはデバッグできるように
const enhancer = process.env.NODE_ENV === 'development' ?
 composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
//アプリ内の全てのstateはstoreに集約される
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <MuiThemeProvider>
   <Provider store={store}>
     <BrowserRouter>
       <Switch>
         <Route path="/events/new" component={EventsNew} />
         <Route path="/events/:id" component={EventsShow} />
         <Route exact path="/" component={EventsIndex} />
         <Route exact path="/events" component={EventsIndex} />
       </Switch>
     </BrowserRouter>
   </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
