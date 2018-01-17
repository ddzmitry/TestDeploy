import 'aframe'
import 'aframe-particle-system-component';
import 'aframe-event-set-component';
import {Entity, Scene} from 'aframe-react';
import React,{Component}from 'react';

class Test extends Component {
  constructor(props) {
    
    super(props);


   this.state = {
    // ...props,
    city:'',
    weather:'Rainy',
    name : 'Melanie', 
    x:1.5,
    y:1.25,
    z:-5,
   }
  }

  move(x,y,z){
    console.log(x,y,z)
    x+=Math.random()
    y+=Math.random()
    z+=Math.random()
    this.setState({
      x,y,z
    })
  }
  handleClick(){
    console.log()
    // this.setState({
    //   x,y,z
    // })
    this.setState({
    z : this.state.z + 1
  })
  }
  handleCollide = () => {
  console.log('Collided!');
  // console.log('hello')
  // let {x,y,z} = this.state
  // x+=Math.random()
  // y+=Math.random()
  // z+=Math.random()
  this.setState({
    z : this.state.z + 1
  })
}
   box(){
     return(
      
            <Entity
      onFocus = {()=>console.log('hello')}
      geometry="primitive: box" 
      position={`${this.state.x +Math.random()} ${this.state.y+Math.random()} ${this.state.z+Math.random()}`}
      rotation="0 45 0" 
      material="color: #4CC3D9" />
     
      

     )
   }

  render() {
    let {x,y,z} = this.state
    return (
      <a-scene>
          <a-text value="Shape Game"
                geometry="primitive:plane"
                position = "-2.9 4.26 -7.25"
                ></a-text>

      <Entity particle-system={{preset: 'rain', particleCount: 300}}/>
<a-sky src={require('../images/starry-sky.jpg')} />
<a-entity 
          event-set__click="material.color: red;"
          event-set__mouseenter="material.color: blue"
          onClick = {()=>console.log('clicked')}
          geometry="primitive: sphere; radius: 1.25;" 
          position={`${x} ${y} ${z}`} 
          material="color: #EF2D5E" />

<a-entity 
          event-set__click="material.color: red;"
          event-set__mouseenter="material.color: blue"
          geometry="primitive: sphere; radius: 1.25;" 
          position={`${x+2} ${y+2} ${z-1}`} 
          material="color: #EF2D5E" />

<a-cylinder 
          position="1 0.75 -3" 
          radius="0.5" 
          height="1.5" 
          color="#FFC65D" />


<a-entity 
          event-set__click="material.color: red;"
          event-set__mouseenter="material.color: blue"
          geometry="primitive: sphere; radius: 1.25;" 
          position={`${x+2} ${y+5} ${z-1}`} 
          material="color: #EF2D5E" />

<a-entity geometry="primitive: box"
  position={`${x+6} ${y+3} ${z-2}`}
   material="color: red"/>


    <a-camera><a-cursor></a-cursor></a-camera>
  </a-scene>
    )
  }


  componentDidMount() {
    // debugger;
    console.log(this.state)
    // debugger;
    console.log('CDM')
    // this is a spot where all API calls are usually nade
    this.setState({
        city:'Washington DC'
    })
  }
  
  componentWillMount () {
      
  }

  componentWillReceiveProps (a,b){
    console.log('componentWillReceiveProps')
    console.log(a,b)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
   
  }

  componentWillUpdate (props,newState) {
    console.log('componentWillUpdate')
    console.log(props)
    // props.name = 'Dzmitry'
    // this.props.name = 'Dzmitry'
    console.log(newState)  
    // newState.city = 'Virginia Beach'


    console.log('___________________________')
  }
  
  
}

export default Test;
