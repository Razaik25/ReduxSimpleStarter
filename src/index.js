
import React from 'react';
import ReactDOM from 'react-dom';

// when we are importing our own file, we have to give actual file refrence unlike libraries that we have installed
import SearchBar from './components/search_bar';

// youtube data key
const API_KEY = 'AIzaSyAuKm903hiF15-acLmU4QPflWcsMXd59iw';
// create  a new Component
// const is es6 syntax, it will not change that is the main difference between var and const
// es6 syntax using =>
const App = () => {

  {/* Webpack/babel transpiles JSX to vanilla JS */}

  return (
    <div>
      <SearchBar />
    </div>
  );

};

// Take this Component's HTML and put it in the DOM
// have to pass the instance not class, so dont pass App but wrap it in JSX tags
ReactDOM.render(<App />, document.querySelector('.container'));
