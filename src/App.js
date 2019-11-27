import React from 'react';
import { Route, Switch, Redirect ,Router} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import history from './history'
import routes from './config/routes'

function App () {
  return (
    <div>
      <Router history={history}>
        <Switch>
        <Redirect path='/' to="/home" exact></Redirect>
          {/* <Route path='/home' component={Home} />
          <Route path='/categorylist' component={CategoryList} />
          <Route path='/recommend' component={Profile} />
          <Route path='/shopcart' component={Recommend} />
          <Route path='/profile' component={ShopCart} />
          <Route path='/search' component={Search} />
          <Route path='/home/item/:id' component={Category}/> */}
          {
          routes.map(route => <Route {...route} key={route.path}/>)
          }
             
        </Switch>
        <Footer></Footer>
        
      </Router>
     
     
    </div>
  );
}

export default App;
