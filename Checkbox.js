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

import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

const App = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    // backgroundColor:'black'
  },
  checkbox: {
    alignSelf: "center",
    backgroundColor:'white',
  },

});

export default App;