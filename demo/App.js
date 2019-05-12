/**
 * React-Native Hooks Persist Demo
 * by: Rafael Cerrejon
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  useStatePersist,
  removeStatePersist,
  debugStatePersist,
} from 'react-native-hooks-persist';

const App = (props: any) => {
  const DB_NAME = 'globalStorage';

  const FIELD_KEY = 'buttonSelected';
  const INITIAL_VALUE = 'No';

  const [value, setValue] = useStatePersist(DB_NAME, FIELD_KEY, INITIAL_VALUE);

  const FIELD_KEY_COLOR = 'color';

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native Hooks Persist!</Text>
      <View style={styles.buttonSelectedContainer}>
        <Button onPress={() => setValue(DB_NAME, FIELD_KEY, 1)} title="Set 1" />
        <Button onPress={() => setValue(DB_NAME, FIELD_KEY, 2)} title="Set 2" />
        <Button onPress={() => setValue(DB_NAME, FIELD_KEY, 3)} title="Set 3" />
        <Button
          onPress={() => removeStatePersist(DB_NAME, FIELD_KEY)}
          title="Remove Number"
        />
        <Text style={styles.textSelected}>{value.buttonSelected} Saved</Text>
      </View>
      <View style={styles.buttonSelectedContainer}>
        <Button
          onPress={() => setValue(DB_NAME, FIELD_KEY_COLOR, 'Red')}
          title="Set Red"
        />
        <Button
          onPress={() => setValue(DB_NAME, FIELD_KEY_COLOR, 'Green')}
          title="Set Green"
        />
        <Button
          onPress={() => setValue(DB_NAME, FIELD_KEY_COLOR, 'Blue')}
          title="Set Blue"
        />
        <Button
          onPress={() => removeStatePersist(DB_NAME, FIELD_KEY_COLOR)}
          title="Remove Color"
        />
        <Text style={styles.textSelected}>{value.color} Saved</Text>
      </View>
      <View style={styles.buttonSelectedContainer}>
        <Button
          onPress={() => debugStatePersist(DB_NAME)}
          title="Debug State Persist"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonSelectedContainer: {
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: '#CCCCCC',
    width: '100%',
    marginVertical: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textSelected: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginVertical: 10,
  },
});

export default App;
