import { StadiaController } from 'stadiacontroller';


new StadiaController({
  A: (value) => {
    console.log('A', value);
  },
  all: (value) => {
    console.log(value)
  }
})