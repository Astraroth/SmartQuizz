
import React, { Component} from 'react'
import './App.css'
import Choose from './Choose'
import ToolbarQuizz from './Toolbar'


class App extends Component {

  render() {

    return ( 

      <div className="app">
        <ToolbarQuizz/>   
      </div> 
    )  
  }
}


export default App