//import logo from './logo.svg';
import './App.css';
import message from './message';  // import default
import {name,standard,age} from './person'; //import individually

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

const getmessage = myVehicle(vehicleOne);
function myVehicle({ model, registration: { state } }) {
  const getmessage = 'My ' + model + ' is registered in ' + state + '.';
  return getmessage;
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

const xa = 5;
let text = "Goodbye";
if (xa < 10) {
  text = "Hello";
}

const myElement = <h1>{xa < 10 ? "Hello234" : "Goodbye"}</h1>;

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
        <p>{getmessage}</p>
        <p>{c}</p>
        <span>{one}</span><br></br>
        <span>{two}</span><br></br>
        <span>{rest}</span>
        <h1>{message()}</h1>
        <h2>My name is {name}</h2>
        <h2>I am {age}</h2>
        <h2>I am in standard {standard}</h2>
        <h2>{text}</h2>
        <h2>{myElement}</h2>
    </div>
    
  );
}

export default App;
