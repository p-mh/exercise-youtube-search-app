import React, { Component } from 'react';

import './video.css';

class Video extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   videoURL: props.videoURL,
  //   // };
  // }
  render() {
    return (
      <div className="video">
        <div className="itemvideo">
          <iframe
            src={this.props.videoURL}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default Video;
