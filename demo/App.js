/**
 * React-Native Hooks Persist Demo
 * by: Rafael Cerrejon
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, NativeModules } from 'react-native';
import {
  useStatePersist,
  removeStatePersist,
} from 'react-native-hooks-persist';

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const App = (props: any) => {
  const DB_NAME = 'globalStorage';
  const FIELD_KEY = 'buttonSelected';
  const FIELD_VALUE = 'One';

  const [value, setValue] = useStatePersist(DB_NAME, FIELD_KEY, FIELD_VALUE);

  // const DB_NAME_TEST2 = 'anotherStorage';
  // const FIELD_KEY_TEST2 = 'anotherTest';
  // const INITIAL_VALUE_TEST2 = 'tomato';

  // const [anotherStore, setAnotherStore] = useStatePersist(
  //   DB_NAME_TEST2,
  //   FIELD_KEY_TEST2,
  //   INITIAL_VALUE_TEST2,
  // );
  console.log('-----> value: ', value);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => setValue(DB_NAME, FIELD_KEY, 'One')}
        title="Button 1"
      />
      <Button
        onPress={() => setValue(DB_NAME, FIELD_KEY, 'Two')}
        title="Button 2"
      />
      <Button
        onPress={() => setValue(DB_NAME, FIELD_KEY, 'Three')}
        title="Button 3"
      />
      <Button
        onPress={() => removeStatePersist(DB_NAME, FIELD_KEY)}
        title="Remove"
      />
      <Text style={styles.welcome}>Welcome to React Native Hooks Persist!</Text>
      <Text style={styles.instructions}>{value.buttonSelected} Selected</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
