//import logo from './logo.svg';
import './App.css';

class Header {
  constructor() {
    this.color = "Red";
  }

//this with Regular function:
//changeColor = function() {
 //this with arrow function
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
//document.getElementById("btn").addEventListener("click", myheader.changeColor);


// Array Methods
const myArray = ['apple', 'banana', 'orange'];

const Lists = myArray.map((item) => <p>{item}</p>)

//Destructing with arrays
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(5,10);

//Destructing with objects with nested objects
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

const message = myVehicle(vehicleOne);
function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
  return message;
}

//Spread Operator with arrays
const a = [1,2,3];
const b = [4,5,6];
const c = [...a,...b];

//Spread Operator with destructing
const x=[1,2,3,4,5,6];
const [one,two,...rest] = x;

//Spread Operator with Objects
const myVehicles = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicles, ...updateMyVehicle};

console.log(myUpdatedVehicle);

function App() {
  return (
    <div className="App">
      <h1>Arrow Function</h1>
      <p>The <strong>this</strong> keyword represents the Header object.</p>
      <button id="btn">Click Me!</button>
      <p><strong>this</strong> represents:</p>
      <p id="demo"></p>
      <div>{Lists}</div>
      <ol>
        <li>SUM={add}</li>
        <li>Diffrence={subtract}</li>
        <li>multiply={multiply}</li>
        <li>divide={divide}</li>
        </ol>
        <p>{message}</p>
        <p>{c}</p>
        <span>{one}</span><br></br>
        <span>{two}</span><br></br>
        <span>{rest}</span>
    </div>
    
  );
}

export default App;
