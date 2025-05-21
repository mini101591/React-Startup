//import logo from './logo.svg';
import './App.css';

class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
 // changeColor = function() {
 //arrow function
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

const myList = myArray.map((item) => <p>{item}</p>)

//Destructing


function App() {
  return (
    <div className="App">
      <h1>Arrow Function</h1>
      <p>The <strong>this</strong> keyword represents the Header object.</p>
      <button id="btn">Click Me!</button>
      <p><strong>this</strong> represents:</p>
      <p id="demo"></p>
      <div>{myList}</div>
    </div>
    
  );
}

export default App;
