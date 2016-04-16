import React, { Component } from 'react';

// There are functional components and class components in react

// functional component, no state no ability to communicate wit other components
// const SearchBar = () => {
//   return <input />;
// };

// creating a class based component and give it access to all the functionality of React.component
// class componenet must have a render method
class SearchBar extends Component {
  render() {
    return <input onChange={ event => console.log(event.target.value) } />;
  }

}
// exporting the component
export default SearchBar;
