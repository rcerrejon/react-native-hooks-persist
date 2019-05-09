import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export function useStatePersist(dbName, fieldKey, fieldValue) {
  function getStore() {
    AsyncStorage.getItem(dbName)
      .then(item => {
        if (item !== null) {
          const parsedItem = JSON.parse(item);
          setValue(parsedItem);
        } else {
          const initObjectToSave = { [fieldKey]: fieldValue };
          setValue(initObjectToSave);
        }
      })
      .catch(error => console.log('get Item failed with error: ', error));
  }

  function setStore(db, key, value) {
    AsyncStorage.getItem(db)
      .then(item => {
        if (item !== null) {
          const objCreated = { [key]: value };
          const parsedItem = JSON.parse(item);
          const objToSave = { ...parsedItem, ...objCreated };
          try {
            AsyncStorage.setItem(dbName, JSON.stringify(objToSave));
            setValue(objToSave);
          } catch (error) {
            console.log('set Item failed with error: ', error);
          }
        } else {
          const objectToSave = { [key]: value };
          try {
            AsyncStorage.setItem(db, JSON.stringify(objectToSave));
            setValue(objectToSave);
          } catch (error) {
            console.log('set Item failed with error: ', error);
          }
        }
      })
      .catch(error => console.log('get Item failed with error: ', error));
  }

  const [getValue, setValue] = useState(() => {
    const initValue = { [fieldKey]: fieldValue };
    return initValue;
  });
  useEffect(getStore);
  return [getValue, setStore];
}

export function removeStatePersist(dbName, fieldKey) {
  AsyncStorage.getItem(dbName)
    .then(item => {
      if (item !== null) {
        const parsedItem = JSON.parse(item);
        delete parsedItem[fieldKey];
        try {
          AsyncStorage.setItem(dbName, JSON.stringify(parsedItem));
        } catch (error) {
          console.log('set Item failed with error: ', error);
        }
      }
    })
    .catch(error => console.log('get Item failed with error: ', error));
}
