import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import IndexPageContainer from './components/IndexPageContainer'
import LaunchPageContainer from './components/LaunchPageContainer'

export const App = props => {
  return (
    <Router>
      <Route exact path="/" component={IndexPageContainer} />
      <Route exact path="/launches/:id" component={LaunchPageContainer}/>
    </Router>
  )
}

export default App
