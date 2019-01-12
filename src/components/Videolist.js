import React from 'react';

import VideoItem from './VideoItem.js';

import './videolist.css';

function VideoList(props) {
  const videoList = props.videosURL;
  const videos = (
    <div>
      {videoList.map(video => (
        <VideoItem
          key={video[3]}
          videoURL={video[3]}
          videoImg={video[0]}
          videoTitle={video[1]}
          videoDescription={video[2]}
          getVideoUrl={props.getVideoLink}
        />
      ))}
    </div>
  );

  return (
    <div className="videolist">
      <div className="itemvideolist">
        <p>
          Il y a <b>{props.videosURL.length}</b> vidéos
        </p>
        <div>{videos}</div>
        {/* <div className="itemvideolist" />
        <div className="itemvideolist" /> */}
      </div>
    </div>
  );
}

export default VideoList;
