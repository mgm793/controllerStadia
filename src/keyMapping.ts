export type StadiaButtons = 
'A' | 'B' | 'X' | 'Y' |
'L1' | 'R1' | 'L2' | 'R2' |
'leftArrow' | 'rightArrow' | 'upArrow' | 'downArrow' | 
'options' | 'menu' | 'capture' | 'assistant' | 'stadiaButton' |
'L3' | 'R3' | 'leftStick' | 'rightStick' | 'all'; 

export const keyMapping: Map<number, StadiaButtons> = new Map([
  [0 ,'A'],
  [1, 'B'],
  [2, 'X'],
  [3, 'Y'],
  [4, 'L1'],
  [5, 'R1'],
  [6, 'L2'],
  [7, 'R2'],
  [8, 'options'],
  [9, 'menu'],
  [10, 'L3'],
  [11, 'R3'],
  [12, 'upArrow'],
  [13, 'downArrow'],
  [14, 'leftArrow'],
  [15, 'rightArrow'],
  [16, 'stadiaButton'],
  [17, 'assistant'],
  [18, 'capture']
]);