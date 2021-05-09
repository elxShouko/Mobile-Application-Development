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

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,


} from 'react-native';
import Check from './Checkbox';


const App = () => {
  const [isSelected, setSelection] = useState(false);
  return (

    <View style={{
      backgroundColor: 'black',
      flex: 6
    }}>


      <Image
        source={require('./Images/arrow.jpeg')}
        style={styles.arrow}
      >

      </Image>
      <Image
        style={{
          position: 'absolute',
          right: 20,
          marginTop: 15
        }}
        source={require('./Images/menu-icon.png')}
      ></Image>
      <Image
        style={styles.garenaImage}
        source={require('./Images/GarenaStadium.jpg')}
      ></Image>

      <Text style={{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 45,
        fontFamily: 'System',
        position: 'absolute',
        right: 2,
        marginTop: 310,
        backgroundColor: 'white',
        borderRadius: 12,
        lineHeight: 80,
        opacity: .9,
        paddingLeft: 10,
        paddingRight: 10
      }}>
        HERALD CAFE
      </Text>
      <Image
        style={styles.stars}
        source={require('./Images/stars.jpg')}
      ></Image>

      <Text style={{
        textDecorationLine: 'underline',
        color: 'white',
        marginTop: 60,
        marginLeft: 20,
        fontSize: 30
      }}>Description</Text>

      <ScrollView>

        <Text style={{
          color: 'white',
          fontSize: 20,
          marginLeft: 15,
          marginRight: 12,
          marginTop: 10
        }}>
          This Internet Cafe is a air-conditioned hall filled with eye catching
          light-filled computer parts with plenty of games to choose from. For gamers,
          this is literally a heaven made just for them because all their computers are
          made using the best parts of current technology. Their routers and wifi are built just for gaming
          and with 5 computers per router, the wifi will be the least of worries there.
          Normally Personal Computers(PCs) would switch off immediately whenever there is a power failure.
          Herald Cafe has it's very own Uninterruptable supply (UPS) units to protect from power surges.
          Their furnitures are also made with the best possible quality, comfort being their first priority.
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 20,
          marginTop: 20,
          marginLeft: 15
        }}>
          HOWEVER, there will be a deposit of $50 for assurance of our computer hardwares and furnitures,
          which would be returned to you after each session provided our properties are being handled with care
          in which our staff would check before you leave.
        </Text>
        <View style={{height: 30, width: 32, marginLeft: 20, marginTop: 10 }}>
          <Check />
        </View>
        <Text style={{ color: 'red', position: 'absolute', right: 10, marginTop: 560, marginRight: 40, fontSize: 20 }}>I agree to the Terms And Conditions</Text>
        <TouchableOpacity
          style={styles.button}>
          <Text style={{
            color: 'white',
            fontSize: 22,
            fontWeight: 'bold'
          }}>Make Booking</Text>

        </TouchableOpacity>
      </ScrollView>

    </View>

  )
}

const styles = StyleSheet.create({
  garenaImage: {
    marginTop: 60
  },
  stars: {
    position: 'absolute',
    right: 10,
    marginTop: 390
  },
  arrow: {
    marginTop: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    marginLeft: 200,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default App;
