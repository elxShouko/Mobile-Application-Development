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


import StopwatchContainer from "./stopwatch.container";
import React ,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Picker

} from 'react-native';


const App = () => {
  const [selectedValue, setSelectedValue] = useState("Choose Category");

  return (

    <View style={{
      backgroundColor: 'black',
      flex: 6
    }}>

      <ScrollView>
        <Image
          source={require('./Images/garenaImage.jpeg')}
          style={styles.garena}
        >

        </Image>
        <View style={styles.container}>


          <StopwatchContainer />

        </View>
        <Text style={{
          color: 'white',
          position: 'absolute',
          alignSelf: 'center',
          fontSize: 30,
          marginTop: 275
        }}>
          Amount to pay: $0.00
      </Text>

        <Text style={{
          color: 'red',
          fontSize: 25,
          marginTop: 40,
          marginLeft: 50,
          marginRight: 55,

        }}>Please press 'Stop' when you are done playing.</Text>
        <Text style={{
          color: 'red',
          fontSize: 20,
          marginTop: 20,
          marginLeft: 50,
          marginRight: 55
        }}>
          If a dishonest act is commited, a fine of $500 will be imposed!
        </Text>
        
        <Picker
            selectedValue={selectedValue}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Remind me in:" value="1" />
            <Picker.Item label="1 Hour" value="2" />
            <Picker.Item label="2 Hour" value="3" />
            <Picker.Item label="3 Hour" value="4" />
            <Picker.Item label="4 Hour" value="5" />
            <Picker.Item label="5 Hour" value="6" />
            <Picker.Item label="6 Hour" value="6" />

          </Picker>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  garena: {
    marginTop: 70,
    marginLeft: 170
  },
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "8%",
  },
  pickerStyle: {
    height: 150,
    width: "80%",
    color: "red",
    justifyContent: 'center',
    marginLeft: 45,
    
    
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },



});

export default App;
