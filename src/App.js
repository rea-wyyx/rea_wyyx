import React ,{ Component }from 'react';
import { Route, Switch, Redirect ,withRouter} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import routes from './config/routes'

const showPaths = ['/home', '/categorylist', '/recommend', '/shopcart']

function isShow(path) {
  return showPaths.some(item => {
    return item === path || path.indexOf('/categorylist')===0
  })
}

 class App extends Component {
  render() {
    console.log('----', this.props.location.pathname)
    return (
      <div>
      
          <Switch>
            <Redirect path='/' to="/home" exact></Redirect>
            {
              routes.map(route => <Route {...route} key={route.path}/>)
              }
          </Switch>
          {
            isShow(this.props.location.pathname) ? <Footer ></Footer> : null
          }
    </div>
    )
  }
}


export default withRouter(App);
