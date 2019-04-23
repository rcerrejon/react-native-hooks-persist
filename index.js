import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export function useStorePersist(initial, key) {
  function getStore() {
    AsyncStorage.getItem(key)
      .then(item => setValue(JSON.parse(item)))
      .catch(error => console.log('get Item failed with error: ', error));
  }

  function setStore(item) {
    try {
      AsyncStorage.setItem(key, JSON.stringify(item));
      setValue(item);
    } catch (error) {
      console.log('set Item failed with error: ', error);
    }
  }

  const [getValue, setValue] = useState(initial);
  useEffect(getStore, []);
  return [getValue, setStore];
}
