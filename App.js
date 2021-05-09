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

import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Button,
  
} from 'react-native';




const App = () => {
  
  return (
    
    <View style={{ backgroundColor: 'black', flex: 6 }}>
      <Text style={{
        color: 'red',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20

      }}>Home</Text>
      
          <Image
            style={{ position: 'absolute', right: 20, marginTop: 20 }}
            source={require('./Images/menu-icon.png')}
          />
        
      




      <Image
        style={{ marginLeft: 170, marginTop: 110 }}
        source={require('./Images/garenaImage.jpeg')}
      />



      <View >
        <Text style={styles.red}>Cafe Bazaar</Text>

        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 50,
          marginLeft: 80
        }}>
          BOOK YOUR SEATS
      </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Booking Started')}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            alignContent: 'center',
            textAlign: 'center',
            fontWeight: 'bold',

          }}>Get Started</Text>

        </TouchableOpacity>


      </View>

    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 20,
    marginLeft: 100
  },
  button: {
    alignItems: "center",
    backgroundColor: 'red',
    padding: 15,
    marginTop: 60,
    width: 300,
    marginLeft: 65,
    borderRadius: 10
  }
})


export default App;
