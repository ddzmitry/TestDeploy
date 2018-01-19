import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-vr';

class Timer extends Component{
constructor(props){
  super(props);

  this.state={
    minutes: 0,
    seconds: 0
  }
}

componentWillMount(){
  // let timeout= parseInt(this.props.start) + 61000;
  // this.getTimeUntil(timeout);

}

componentDidMount(){
  // let timeout= parseInt(this.props.start) + 61000;
  // setInterval(()=> this.getTimeUntil(timeout), 1000)
  console.log('Thimer')
  console.log(this.props.timer)
  console.log(this.props)
}




render(){
    return(
      <View style={styles.Button}>
        <Text style={styles.ButtonText}>You Have {this.props.timer} Left</Text>
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
