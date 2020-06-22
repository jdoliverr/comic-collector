import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav/Nav';
import landing from './landing/landing';
import home from './home/home';
import login from './login/login';
import collection from './collection/collection';
import wishlist from './wishlist/wishlist';
import signup from './signup/signup';

class App extends React.Component {
  
  
  render() {
    return (
      <div>
        <Nav/>
        <header>
          <h1>Comic Collection</h1>
        </header>
        <main className='App'>
            <Route exact path='/' component={landing}/>
            <Route path='/home' component={home}/>
            <Route path='/login' component={login}/>
            <Route path='/signup' component={signup}/>
            <Route path='/collection' component={collection}/>
            <Route path='/wishlist' component={wishlist}/>
        </main>
      </div>
      
    );
  };

}

export default App;
