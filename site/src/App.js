import React, { Component } from 'react'
import RouterWrap from './router'
import { Button } from 'antd'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <RouterWrap />
      </div>
    )
  }
}

export default App;
