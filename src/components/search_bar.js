import React, { Component } from 'react';

// There are functional components and class components in react

// functional component, no state no ability to communicate wit other components
// const SearchBar = () => {
//   return <input />;
// };

// creating a class based component and give it access to all the functionality of React.component
// class componenet must have a render method
class SearchBar extends Component {
  // it is called automaticaly whenever new instance of class is created
  // is similar to get initial state

  // turn input to a controlled component by adding value ={this.state.term} i.e its value is determined by state
  // its value only changes when the state changes
  // whenever setstate is called, the componenet re-renders

  constructor(props){
    super(props);
    this.state = { term: ''};
  }

  render() {

    return (
      <div>
        <input
          value= {this.state.term}
          onChange={ event => this.setState( {term: event.target.value} ) } />
      </div>
    )
  }

}
// exporting the component
export default SearchBar;
