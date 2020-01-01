# Javascript Speach Synthesis

Wes Bos Youtube Tutorial: [JavaScript Text-To-Speech - #JavaScript30 23/30](https://www.youtube.com/watch?v=saCpKH_xdgs).


*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Tutorial Code using javascript speach synthesis.

## Screenshots

![Example screenshot](./img/speach.png).

## Technologies

* [Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## Code Examples

* show voices that can be chosen by user in a dropdown menu.

```javascript
function populateVoices() {
  voices = this.getVoices(); // array of 25 synthesised voices, including name & language
  voicesDropdown.innerHTML = voices
  .filter(voice => voice.lang.includes('en')) // limit 25 voices to just the ones in English
  .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
  .join('');
}
```

## Features

*  Options to select different voices, voice speed and pitch.

## Status & To-Do List

* Status: Working.

* To-Do: Nothing.

## Inspiration

* Wes Bos Youtube Tutorial: [JavaScript Text-To-Speech - #JavaScript30 23/30](https://www.youtube.com/watch?v=saCpKH_xdgs).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
