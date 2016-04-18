import React from 'react';

const VideoListItem = ({video}) =>{

  // putting {video} in the argument is identical as the writing the line below
  // const video  = props.video;
  // console.log(video);
  
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">

        <div className ="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>

    </li>
  )
};

export default VideoListItem;
