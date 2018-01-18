import React, {Component} from 'react';
import {View, Text } from 'react-vr';

class Timer extends Component{

constructor(){
  super();

  this.state={
    elapsed: 0
  }
}

  componentDidMount(){
    this.timer = setInterval(this.tick, 1);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    this.setState({elapsed: new Date() - props.start});
  }

  render(){
    let elapsed = Math.round(this.state.elapsed / 1000);

    var seconds = (elapsed).toFixed(1);

    return(
      <View>
        <Text>started {seconds} seconds ago </Text>
      </View>
    )
  }
};

export default Timer;
