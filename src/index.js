import React from "react";
import ReactDOM from "react-dom";


const API_KEY = 'AIzaSyC8rNZ8fkVAjK_B4UfmNQNISPar6D-TjI4';

// Create a new component
// This component should produce some HTML

const App = () => {
  return <div>Hi!</div>;
}


// Take this component's generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
