# Stadia Controller
This library allows you to use a Stadia controller to control your website. 
You can use it with JS and TS.

## Installation

```bash
npm i stadiacontroller
```

## How to use

The only thing you need to do to use it is specify a callback for a specific button/stick or for all of them. 

```ts
new StadiaController({
  A: (value) => { //specific button/stick
    console.log('A', value);
  },
  all: (value) => { //all buttons/sticks
    console.log('all', value);
  }
})
```
## Available Buttons and Sticks
'A', 'B', 'X', 'Y', 'L1', 'R1', 'L2', 'R2', 'leftArrow', 'rightArrow', 'upArrow', 'downArrow', 'options', 'menu', 'capture', 'assistant', 'stadiaButton', 'L3', 'R3', 'leftStick', 'rightStick' and 'all'.