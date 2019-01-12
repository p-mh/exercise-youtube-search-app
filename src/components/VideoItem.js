import React from 'react';

import './videoitem.css';

function videoItem(props) {
  return (
    <div className="videoItem">
      <img
        src={props.videoImg}
        alt={props.videoTitle}
        onClick={() => props.getVideoUrl(props.videoURL)}
      />
      <p className="titlestyle">{props.videoTitle}</p>
      <p className="description">{props.videoDescription}</p>
    </div>
  );
}

export default videoItem;
