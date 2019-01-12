import React, { Component } from 'react';
import _ from 'lodash';
import Youtube from 'simple-youtube-api';

import Title from './Title.js';
import SearchBar from './Searchbar.js';
import Video from './Video.js';
import VideoList from './Videolist.js';
import APIKEY from '../auth';

import './app.css';

const youtube = new Youtube(APIKEY);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURLCentral: 'https://www.youtube.com/embed/Xjs6fnpPWy4',
      videosURL: [],
    };
  }
  componentDidMount() {}
  onChangeInput(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }
  async searchYTVideo(e) {
    const searchValue = e.target.value;
    const results = await youtube.searchVideos(`${e.target.value}`, 3);

    const resultsID = results.map(({ raw }) => {
      return [
        raw.snippet.thumbnails.high.url,
        raw.snippet.title,
        raw.snippet.description,
        'https://www.youtube.com/embed/' + raw.id.videoId,
      ];
    });

    this.setState({
      videosURL: resultsID,
      searchValue: searchValue,
    });
  }

  keyFunction(e) {
    if (e.key === 'Enter') {
      this.searchYTVideo(e);
    }
  }

  getVideoUrlFromVideoItem(urlLink) {
    // console.log(this);
    this.setState({
      videoURLCentral: urlLink,
    });
  }
  render() {
    return (
      <div className="app">
        <Title />

        <div className="searchbarbloc">
          <SearchBar
            searchFunction={this.onChangeInput.bind(this)}
            searchFunctionClick={this.searchYTVideo.bind(this)}
            value={this.setState.searchValue}
            keyUp={this.keyFunction.bind(this)}
          />
        </div>
        <div className="blocvideos">
          <Video videoURL={this.state.videoURLCentral} />
          <VideoList
            getVideoLink={this.getVideoUrlFromVideoItem.bind(this)}
            videosURL={this.state.videosURL}
          />
        </div>
      </div>
    );
  }
}

export default App;
