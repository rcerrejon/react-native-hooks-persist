# React-Native Hooks Persist

<a href="url"><img src="demo/images/hook.png" align="left" height="250" ></a>

React Native Hooks Persist with Async Storage

![language](https://img.shields.io/github/languages/top/rcerrejon/react-native-hooks-persist.svg)

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

![NPM](https://img.shields.io/npm/l/react-native-hooks-persist.svg)

![GitHub issues](https://img.shields.io/github/issues-raw/rcerrejon/react-native-hooks-persist.svg)

![GitHub stars](https://img.shields.io/github/stars/rcerrejon/react-native-hooks-persist.svg?style=social)

## Getting Started
### Install
`yarn add react-native-hooks-persist`

or

`npm install react-native-hooks-persist`

### Methods


| Name               | Description               |
| :----------------- | :------------------------ |
| useStatePersist    | Main hook persist method  |
| removeStatePersist | Remove an item from Store |
| debugStatePersist  | Debug all items on Store  |

## Basic usage

### imports
```
import {
  useStatePersist,
  removeStatePersist,
  debugStatePersist,
} from 'react-native-hooks-persist';

const DB_NAME = 'globalStorage';
const FIELD_KEY = 'selectedColor';
const INITIAL_VALUE = 'Red';
```

### Create
`const [color, setColor] = useStatePersist(DB_NAME, FIELD_KEY, INITIAL_VALUE);`
### Read
`<Text>{color.selectedColor} Selected</Text>`
### Update
`setColor(DB_NAME, FIELD_KEY, 'Blue');`
### Delete
`removeStatePersist(DB_NAME, FIELD_KEY);`
### Debug all Items
`debugStatePersist(DB_NAME);`

<a href="url"><img src="demo/images/scrshtdebug.png" align="center" ></a>


## Example in `/demo`

### Run in demo folder:
- `yarn` or `npm install`

- `react-native start`

- `react-native run-ios` or `react-native run-android`

<a href="url"><img src="demo/images/scrsht01.png" align="center" height="400" ></a>

## Contributing

- Clone this Repo
- Install dependencies
- Checkout develop branch
- Add your feature or fix
- Make sure your improvement works
- Open a pull request

---
Baked with Love ♥ from Cologne & Huelva

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Yaxian"><img src="https://avatars1.githubusercontent.com/u/9707805?v=4" width="100px;" alt="Yaxian"/><br /><sub><b>Yaxian</b></sub></a><br /><a href="https://github.com/rcerrejon/react-native-hooks-persist/commits?author=Yaxian" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
