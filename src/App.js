import React, { Component } from 'react'
import Post from './components/Post/Post'
import Head from './components/Head/Head'
import 'reset-css'

export default class App extends Component {
  render() {
    return (
      
      <div>
      <Head/>
      <Post/>

      </div>
    )
  }
}
