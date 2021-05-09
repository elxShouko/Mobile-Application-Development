// Class: DIT/FT/1B/03
// Admission Number: 2026453
// Phan Kiah Fong Nicholas


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

class StopwatchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 0,
      msec: 0
    }

    this.lapArr = [];

    this.interval = null;
  }
  handleToggle = () => {
    this.setState(
      {
        start: !this.state.start
      },
      () => this.handleStart()
    );
  };

  handleLap = (min, sec, msec) => {
    this.lapArr = [
      ...this.lapArr,
      { min, sec, msec }
    ]

  };

  handleStart = () => {
    if (this.state.start) {
      this.interval = setInterval(() => {
        if (this.state.msec !== 99) {
          this.setState({
            msec: this.state.msec + 1
          });
        } else if (this.state.sec !== 59) {
          this.setState({
            msec: 0,
            sec: ++this.state.sec
          });
        } else {
          this.setState({
            msec: 0,
            sec: 0,
            min: ++this.state.min
          });
        }
      }, 1);

    } else {
      clearInterval(this.interval);
    }
  };

  handleReset = () => {
    this.setState({
      min: 0,
      sec: 0,
      msec: 0,

      start: false
    });

    clearInterval(this.interval);

    this.lapArr = [];
  };


  render() {
    return (

      <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.child}>{padToTwo(this.state.min) + ' : '}</Text>
          <Text style={styles.child}>{padToTwo(this.state.sec) + ' : '}</Text>
          <Text style={styles.child}>{padToTwo(this.state.msec)}</Text>
        </View>
        <View style={styles.buttonParent}>

          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Start</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Stop</Text></TouchableOpacity>
        </View>
        
      </View>
    );
  }


}

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'black',
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingTop: ".5%",
    paddingBottom: ".5%",
  },

  child: {
    fontSize: 60,
    color: "red",
  },

  buttonParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "12%",
  },

  button: {
    backgroundColor: "red",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#694966",
    height: 60,
    marginTop:10
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    fontWeight: 'bold'
  }
});




export default StopwatchContainer;
