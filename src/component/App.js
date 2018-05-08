import React from 'react'
import logo from '../styles/logo.svg'
import '../styles/App.css'

import PostForm from './PostForm'
import AllPost from './AllPost'

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <header className="navbar">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">CRUD redux [Post It]</h2>
        </header>

        <div>
          <PostForm />
          <AllPost />
        </div>

      </div>
    )
  }
}

export default App