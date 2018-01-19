import React from 'react';
import {
  StyleSheet,
  Text,
  VrButton,
  asset,
} from 'react-vr';
// import {getTimeUntil} from './index.vr'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
  	  button: {
    		margin: 0.05,
        height: 0.4,
        backgroundColor: 'red',
        transform: [
          {translate: [-2, 0, -5]}
        ]
	    },
  	  text: {
    		fontSize: 0.3,
    		textAlign: 'center',
  	  },
	  });
  }



  render() {
    return (
      <VrButton style={this.styles.button}
        onClick={()=>{
          console.log('long CLick')
          console.log(this.props)
          this.props.startGame()
        }}
        onClickSound={{
          mp3: asset(this.props.audio)}}
          >
        <Text style={this.styles.text}>
          Start
        </Text>
      </VrButton>
    );
  }
}
