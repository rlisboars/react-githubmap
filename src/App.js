import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import './config/ReactotronConfig'
import store from './store'

import GlobalStyle from './globalStyle'
import Main from './pages/Main'

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  </Provider>
)

export default App
