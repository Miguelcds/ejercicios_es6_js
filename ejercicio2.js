2.1

const pointssList = [32, 54, 21, 64, 75, 43]

const copyPoint = [...pointssList]

// console.log(copyPoint);


2.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};


const copyToy = {...toy}

// console.log(copyToy);


2.3


const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];


const combinedPoints = [...pointsList,...pointsLis2];

// console.log(combinedPoints);


2.4


const toyy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}


const combinedToy = {...toyy,...toyUpdate};

// console.log(combinedToy);


2.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];


// const [ one, two, three, four, five ] = colors;

// const colorss = [one, two, four, five];

// console.log(colorss);


const [color0, color1, color2, ...rest] = colors

colorUpdate = [color0, color1 , rest];

// console.log(colorUpdate);












