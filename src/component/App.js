import React from 'react'
import logo from '../styles/logo.svg'
import '../styles/App.css'

import PostForm from './PostForm'
import AllPost from './AllPost'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">hello</p>
        <div>
          <PostForm />
          <AllPost />
        </div>
      </div>
    )
  }
}

export default App