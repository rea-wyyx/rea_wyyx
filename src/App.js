import React, {Component} from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Topic from './pages/Topic/Topic'
export default class App extends Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route path='/topic' component={Topic}/>
        </Switch>
      </HashRouter>
    )
  }
}
