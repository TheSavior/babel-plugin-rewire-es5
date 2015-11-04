#babel-plugin-rewire-es5

[![Build Status](https://travis-ci.org/TheSavior/babel-plugin-rewire-es5.svg)](https://travis-ci.org/TheSavior/babel-plugin-rewire-es5)
[![devDependency Status](https://david-dm.org/TheSavior/babel-plugin-rewire-es5.svg)](https://david-dm.org/TheSavior/babel-plugin-rewire-es5#info=devDependencies)
[![devDependency Status](https://david-dm.org/TheSavior/babel-plugin-rewire-es5/dev-status.svg)](https://david-dm.org/TheSavior/babel-plugin-rewire-es5#info=devDependencies)

Hook [rewire](https://github.com/jhnns/rewire) into every required package.

## Installation

```sh
$ npm install babel-plugin-rewire-es5 --save-dev
```


## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["rewire-es5"]
}
```

### Via CLI

```sh
$ babel --plugins rewire-es5 script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["rewire-es5"]
});
```

## API
```
var myModule = require('./my-module');
var myFunc = myModule.__get__('myFunc');
```
