
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// when we are importing our own file, we have to give actual file refrence unlike libraries that we have installed
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// youtube data key
const API_KEY = 'AIzaSyAuKm903hiF15-acLmU4QPflWcsMXd59iw';


// create  a new Component
// const is es6 syntax, it will not change that is the main difference between var and const

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };
    // videos is a callback function
    YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {
      // in es6 syntax,  if key and property are the same varibale name, same as this.setState({ videos: videos });
      this.setState({ videos });
    });
  }

  // video_list needs access to this.state.videos i.e passing data from app(parent) to child (video_list)
 // that is passing props
  render(){
    {/* Webpack/babel transpiles JSX to vanilla JS */}
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

// Take this Component's HTML and put it in the DOM
// have to pass the instance not class, so dont pass App but wrap it in JSX tags
ReactDOM.render(<App />, document.querySelector('.container'));


// react has downwards data flow
// all other components are children of the app component, therefore app should fetch the data
