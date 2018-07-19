import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css'
import configureStore from './store/configureStore'

import Header from './components/header'
import Main from './containers/main'
import Footer from './components/footer'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
)
