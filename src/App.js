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

//Destructing
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(5,10);


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
    </div>
    
  );
}

export default App;
