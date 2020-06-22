import React from 'react';
import { Route } from 'react-router-dom';
import UserContext from './UserContext';
import Nav from './nav/Nav';
import landing from './landing/landing';
import home from './home/home';
import login from './login/login';
import collection from './collection/collection';
import wishlist from './wishlist/wishlist';
import signup from './signup/signup';
import addComic from './add-comic/add-comic';

class App extends React.Component {
  state = {
    collection: [
      {
        title: 'title1',
        author: 'author1',
        issue: 1,
        read: 'yes',
        description: 'description'
      },
      {
        title: 'title2',
        author: 'author2',
        issue: 2,
        read: 'yes',
        description: 'description'
      },
      {
        title: 'title3',
        author: 'author3',
        issue: 3,
        read: 'no',
        description: 'description'
      }
    ],
    wishlist: [
      {
        title: 'wltitle1',
        author: 'author1',
        issue: 1,
        read: 'yes',
        description: 'description'
      },
      {
        title: 'wltitle2',
        author: 'author2',
        issue: 2,
        read: 'yes',
        description: 'description'
      },
      {
        title: 'wltitle3',
        author: 'author3',
        issue: 3,
        read: 'no',
        description: 'description'
      }
    ]
  }

  handleAddComicSubmit = (event) => {
    event.preventDefault();
    console.log('submit')
    const title = event.target.title.value
    const author = event.target.author.value
    const issue = event.target.issue.value
    const read = event.target.read.value
    const description = event.target.description.value
    this.addNewComic(title, author, issue, read, description)
  }

  addNewComic = (title, author, issue, read, description) => {
    const newComic = {
      title: title,
      author: author,
      issue: issue,
      read: read,
      description: description
    }
    const newCollection = [...this.state.collection, newComic];
    console.log('added')
    this.setState({
      collection: newCollection
    })
  }

  render() {
    return (
      <UserContext.Provider value={{
        collection: this.state.collection,
        wishlist: this.state.wishlist,
        handleAddComic: this.handleAddComicSubmit,
      }} >
        <div>
          <Nav />
          <header>
            <h1>Comic Collection</h1>
          </header>
          <main className='App'>
            <Route exact path='/' component={landing} />
            <Route path='/home' component={home} />
            <Route path='/login' component={login} />
            <Route path='/signup' component={signup} />
            <Route path='/collection' component={collection} />
            <Route path='/wishlist' component={wishlist} />
            <Route path='/addcomic' component={addComic} />
          </main>
        </div>
      </UserContext.Provider>
    );
  };

}

export default App;
