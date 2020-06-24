import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import UserContext from './UserContext';
import Nav from './nav/Nav';
import landing from './landing/landing';
import home from './home/home';
import login from './login/login';
import collection from './collection/collection';
import wishlist from './wishlist/wishlist';
import signup from './signup/signup';
import addComic from './add-comic/add-comic';

const baseUrl = 'http://localhost:8000/api';

class App extends React.Component {
  state = {
    collection: [],
    wishlist: [],
    displayErrors: false,
  }

  componentDidMount() {
    fetch(`${baseUrl}/collection`)
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(resJson => {
        this.setState({
          collection: resJson
        })
      })
      .catch(error => {
        console.error({ error })
      })

    fetch(`${baseUrl}/wishlist`)
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(resJson => {
        this.setState({
          wishlist: resJson
        })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddComicSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value
    const author = event.target.author.value
    const issue = event.target.issue.value
    const read = event.target.read.checked
    const description = event.target.description.value
    const endpoint = event.target.destination.value
    if(endpoint === collection) {
      this.addNewComicCollection(title, author, issue, read, description)
      this.props.history.push('/collection');
    }else{
      this.addNewComicWishlist(title, author, issue, read, description)
      this.props.history.push('/wishlist');
    }
    
    
  }

  addNewComicCollection = (title, author, issue, read, description) => {
    const newComic = {
      comic_title: title,
      comic_author: author,
      issue: issue,
      is_read: read,
      description: description,
      user_id: 3,
    }
    const newCollection = [...this.state.collection, newComic];
    const newComicString = JSON.stringify(newComic)
    return fetch(`${baseUrl}/collection`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: newComicString
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(() => {
        this.setState({
          collection: newCollection
        })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  addNewComicWishlist = (title, author, issue, read, description) => {
    const newComic = {
      comic_title: title,
      comic_author: author,
      issue: issue,
      is_read: read,
      description: description,
      user_id: 3,
    }
    const newWishlist = [...this.state.wishlist, newComic];
    const newComicString = JSON.stringify(newComic)
    return fetch(`${baseUrl}/wishlist`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: newComicString
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(() => {
        this.setState({
          wishlist: newWishlist
        })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  deleteComicCollection = (comicId) => {
    const newCollection = this.state.collection.filter(comic => 
      comic.id !== comicId
      )
    fetch(`${baseUrl}/collection/${comicId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(() => {
      this.setState({
        collection: newCollection
      })
    })
  }

  deleteComicWishlist = (comicId) => {
    const newWishlist = this.state.wishlist.filter(comic => 
      comic.id !== comicId
      )
    fetch(`${baseUrl}/wishlist/${comicId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(() => {
      this.setState({
        wishlist: newWishlist
      })
    })
  }

  render() {
    return (
      <UserContext.Provider value={{
        collection: this.state.collection,
        wishlist: this.state.wishlist,
        handleAddComic: this.handleAddComicSubmit,
        deleteComicCollection: this.deleteComicCollection,
        deleteComicWishlist: this.deleteComicWishlist,
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

export default withRouter(App);
