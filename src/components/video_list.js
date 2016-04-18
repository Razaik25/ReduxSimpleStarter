import React from 'react';
import VideoListItem from './video_list_item';


// functional component
// props can be an argument to the functional component
const VideoList = (props) => {

  // {props.videos.length}
  // using map instead for or use for each
  const videoItems = props.videos.map((video) =>{
    return <VideoListItem key={video.etag} video={video} />

  });

  return (
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
  );

}

export default VideoList;
