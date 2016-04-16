
import React from 'react';
import ReactDOM from 'react-dom';
// create  a new Component
// const is es6 syntax, it will not change that is the main difference between var and const
// es6 syntax using => 
const App = () => {

  {/* Webpack/babel transpiles JSX to vanilla JS */}

  return <div>Hi!</div>;

}

// Take this Component's HTML and put it in the DOM
// have to pass the instance not class, so dont pass App but wrap it in JSX tags
ReactDOM.render(<App />, document.querySelector('.container'));
