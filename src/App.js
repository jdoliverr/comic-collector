import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserContext from './UserContext';
import Nav from './nav/Nav';
import landing from './landing/landing';
import home from './home/home';
import login from './login/login';
import collection from './collection/collection';
import wishlist from './wishlist/wishlist';
import signup from './signup/signup';
import addComic from './add-comic/add-comic';
import TokenService from './services/token-service';
import PrivateRoute from './utils/private-route';
import PublicOnlyRoute from './utils/public-route';

const baseUrl = 'http://localhost:8000/api';

class App extends React.Component {
  state = {
    collection: [],
    wishlist: [],
    displayErrors: false,
    logged_in: true,
    inputValue: ''
  }

  handleInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  componentDidMount() {
    this.getAllComics()
  }

  getAllComics = () => {
    fetch(`${baseUrl}/collection`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
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

    fetch(`${baseUrl}/wishlist`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
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
    if (endpoint === 'collection') {
      this.addNewComicCollection(title, author, issue, read, description)
      this.props.history.push('/collection');
    } else {
      this.addNewComicWishlist(title, author, issue, read, description)
      this.props.history.push('/wishlist');
    }
  }

  updateReadCollection = (comicId) => {
    const comic = this.state.collection.find(comic =>
      comic.id === comicId
    )
    const comicUpdate = {
      comic_title: comic.comic_title,
      comic_author: comic.comic_author,
      is_read: !comic.is_read,
      description: comic.description,
    }
    return fetch(`${baseUrl}/collection/${comicId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(comicUpdate) 
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(() => {
        this.getAllComics()
      })
      .catch(error => {
        console.error({ error })
      })
  }

  updateReadWishlist = (comicId) => {
    const comic = this.state.wishlist.find(comic =>
      comic.id === comicId
    )
    console.log(comic)
    const comicUpdate = {
      comic_title: comic.comic_title,
      comic_author: comic.comic_author,
      is_read: !comic.is_read,
      description: comic.description,
    }
    return fetch(`${baseUrl}/wishlist/${comicId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(comicUpdate) 
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(() => {
        this.getAllComics()
      })
      .catch(error => {
        console.error({ error })
      })
  }

  addNewComicCollection = (title, author, issue, read, description, user_id) => {
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
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
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

  addNewComicWishlist = (title, author, issue, read, description, user_id) => {
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
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
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
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
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
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(() => {
        this.setState({
          wishlist: newWishlist
        })
      })
  }

  handleSort = (event) => {
    event.preventDefault()
    if(event.target.value === 'title') {
      this.sortByTitle()
    }
    else if (event.target.value === 'author') {
      this.sortByAuthor()
    }
  }

  sortByTitle = () => {
    function compare(a, b) {
      const titleA = a.comic_title.toUpperCase()
      const titleB = b.comic_title.toUpperCase()

      let comparison = 0
      if (titleA > titleB) {
        comparison = 1
      }else if (titleA < titleB) {
        comparison = -1
      }
      return comparison
    }

    const sortedWishlist = [...this.state.wishlist].sort(compare)
    const sortedCollection = [...this.state.collection].sort(compare)
    this.setState({
      collection: sortedCollection,
      wishlist: sortedWishlist
    })
  }

  sortByAuthor = () => {
    function compare(a, b) {
      const authorA = a.comic_author.toUpperCase()
      const authorB = b.comic_author.toUpperCase()

      let comparison = 0
      if (authorA > authorB) {
        comparison = 1
      }else if (authorA < authorB) {
        comparison = -1
      }
      return comparison
    }

    const sortedWishlist = [...this.state.wishlist].sort(compare)
    const sortedCollection = [...this.state.collection].sort(compare)
    this.setState({
      collection: sortedCollection,
      wishlist: sortedWishlist
    })
  }

  render() {
    const filteredList = this.state.collection.filter(comic => {
      return comic.comic_title.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })
    return (
      <UserContext.Provider value={{
        collection: this.state.collection,
        wishlist: this.state.wishlist,
        handleAddComic: this.handleAddComicSubmit,
        deleteComicCollection: this.deleteComicCollection,
        deleteComicWishlist: this.deleteComicWishlist,
        updateReadCollection: this.updateReadCollection,
        updateReadWishlist: this.updateReadWishlist,
        handleSort: this.handleSort,
        handleInputValue: this.handleInputValue,
        filteredList: filteredList,
        inputValue: this.handleInputValue
      }} >
        <div>
          <Nav />
          <header>
            <Link to='/home'>
              <h1>Comic Collector</h1>
            </Link>
          </header>
          <main className='App'>
            <PublicOnlyRoute exact path='/' component={landing} />
            <PublicOnlyRoute path='/login' component={login} />
            <PublicOnlyRoute path='/signup' component={signup} />
            <PrivateRoute path='/home' component={home} />
            <PrivateRoute path='/collection' component={collection} />
            <PrivateRoute path='/wishlist' component={wishlist} />
            <PrivateRoute path='/addcomic' component={addComic} />
          </main>
        </div>
      </UserContext.Provider>
    );
  };
}

export default withRouter(App);