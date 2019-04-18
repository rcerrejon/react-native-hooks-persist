import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

function quepazaloco() {
  console.warn('aqui andamios');
}

function createStorageMethods(storage, key) {
  return {
    set: value => {
      const stringified = JSON.stringify(value);
      storage.setItem(key, stringified);
    },

    get: () => {
      const stringified = storage.getItem(key);
      return JSON.parse(stringified);
    },
  };
}

function createLocalStorageMethods(key) {
  return createStorageMethods(window.localStorage, key);
}

function createSessionStorageMethods(key) {
  return createStorageMethods(window.sessionStorage, key);
}

function createCookieMethods(key, { days }) {
  return {
    set: value => {
      const stringified = JSON.stringify(value);
      let expiration = null;
      if (days) {
        const currentDate = new Date();
        const expirationTime = currentDate.getTime() + days * 24 * 60 * 60 * 1000;
        const expirationString = new Date(expirationTime).toUTCString();
        expiration = `; expires=${expirationString}`;
      } else {
        expiration = '';
      }
      document.cookie = `${key}=${stringified}${expiration}; path=/`;
    },

    get: () => {
      const cookies = document.cookie ? document.cookie.split('; ') : [];
      for (let i = 0; i < cookies.length; i++) {
        const parts = cookies[i].split('=');
        if (parts[0] === key) {
          return JSON.parse(parts[1]);
        }
      }
    },
  };
}

function useStateAndPersistence(createMethods, initial, key, options) {
  const { get, set } = createMethods(key, options);

  const [value, setValue] = useState(() => {
    const persistedValue = get();
    return persistedValue ? persistedValue : initial;
  });

  return [
    value,
    (getNextValue, callback) => {
      const nextValue = typeof getNextValue === 'function' ? getNextValue(value) : getNextValue;
      set(nextValue);
      setValue(nextValue);
      callback && callback();
    },
  ];
}

function useStateAndLocalStorage(initial, key) {
  return useStateAndPersistence(createLocalStorageMethods, initial, key);
}

function useStateAndSessionStorage(initial, key) {
  return useStateAndPersistence(createSessionStorageMethods, initial, key);
}

function useStateAndCookie(initial, key, options) {
  return useStateAndPersistence(createCookieMethods, initial, key, options);
}

function useStateAndAsyncStorage(initial, key) {
  const [value, setValue] = useState(initial);
  useEffect(readItemValue, []);
  function readItemValue() {
    AsyncStorage.getItem(key).then(itemValue => setValue(itemValue));
  }
  function writeItemValue(putValue) {
    AsyncStorage.setItem(key, putValue);
    setValue(putValue);
  }
  return [value, writeItemValue];
}

module.exports = {
  useStateAndLocalStorage,
  useStateAndSessionStorage,
  useStateAndCookie,
  useStateAndAsyncStorage,
  quepazaloco
};
