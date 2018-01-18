import React, {Component} from 'react';
import {View, Text } from 'react-vr';

class Timer extends Component{

  getInitialState(){
    //call BEFORE render function
    //set initial state to 0
    return {elapsed: 0};
  }

  componentDidMount(){
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    this.setState({elapsed: new Date() - this.props.start});
  }

  render(){
    let elapsed = Math.round(this.state.elapsed / 100);

    var seconds = (elapsed / 10).toFixed(1);

    return(
      <View>
        <Text>started {seconds} seconds ago </Text>
      </View>
    )
  }
};

export default Timer;
