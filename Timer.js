import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-vr';

class Timer extends Component{
constructor(props){
  super(props);

  this.state={
    minutes: 0,
    seconds: 0
  }
  console.log(this.props.start);
}

componentWillMount(){
  let timeout= parseInt(this.props.start) + 61000;
  this.getTimeUntil(timeout);
}

componentDidMount(){
  let timeout= parseInt(this.props.start) + 61000;
  setInterval(()=> this.getTimeUntil(timeout), 1000)
}

getTimeUntil(timeout){

  const time = timeout - (new Date());

  const seconds = Math.floor((time/1000) % 60);
  const minutes = Math.floor((time/1000/60)%60);


  if(this.state.minutes >= 0 ){
  this.setState({minutes, seconds})
}else if(this.state.seconds < 0){
  return this.setState({minutes: -1, seconds: -1})
}
}


render(){
    return(
      <View style={styles.Button}>
        <Text style={styles.ButtonText}>You Have {this.state.minutes} : {this.state.seconds} Left</Text>
      </View>
    )
  }
};


const styles= StyleSheet.create({
Button: {
    backgroundColor: '#fff',
    borderRadius: 0.25,
    width: 3,
    height: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.01,
    transform: [
      {translate: [-2, 0, -5]}
    ]

  },
  ButtonText: {
    textAlign: 'center',
    fontSize: 0.15,
    color: '#000'
  }
});
export default Timer;
