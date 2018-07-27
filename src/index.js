import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'

import configureStore from './store/configureStore'
import Header from './components/header'
import Beer from './containers/beer'
import Main from './containers/main'
import Footer from './components/footer'

const store = configureStore()

const theme = {
  mainColor: '#171504'
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path='/beer/:id' component={Beer} />
            <Route path='/' component={Main} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
