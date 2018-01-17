import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test'

class App extends Component {
  constructor(props){
    // ehrn you are reciving any information from parent
    super(props)

    this.state = {
      color : 'maroon',
      margin: 10
    }
  }

  changeColorMe(){
    let colors = ['aqua','fuchsia','gray','burgundy','purple','yellow']
    let randColor = colors[Math.floor(Math.random()*colors.length)]
    this.setState({
      color:randColor
    })
  
    console.log('Hello')
  }

  increaseMargin(margin){
  let newMarg = margin += 1
  this.setState({
    margin: newMarg
  })

  }

  decreaseMargin(margin){
    let newMarg1 = margin -= 1
    this.setState({
      margin: newMarg1
    })
  }
  



  render() {

    const styles = {
      header:{
        background: this.state.color
      },
      button:{
        margin: this.state.margin
      }
    }
    // this is destructuring
    let {color,margin} = this.state
    return (
      <div className="App">
        <header style={styles.header} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
              <button
              
                onClick = {()=>this.changeColorMe()}
               style={styles.button}>
                Change  Header Color!
              </button>

              <Test appname={this.props.name}   hobbies={['coding','CSS','cooking']}/>
           
            {    }
        <button
          onClick ={()=>this.increaseMargin(margin)}
        >
        Margin++
        </button>

        <button
        onClick = {()=> this.decreaseMargin(margin)}
        >
        Margin--
        </button>
      </div>
    );
  }
}

export default App;
