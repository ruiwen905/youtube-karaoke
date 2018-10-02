import React, { Component } from 'react'
import YouTube from 'react-youtube';
//Components
import AudioSelector from './AudioSelector'
import LyricsFilter from './LyricsFilter'
import CommentFilter from './CommentFilter'

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumental: 0,
      currentTime: 0
    };
    this.handleAudioChange = this.handleAudioChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }
  handleAudioChange(instrumental) {
    this.setState({instrumental: instrumental});
  }
  onStateChange(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
    let currentTime = event.target.getCurrentTime();
    this.setState({currentTime: currentTime});
    console.log(this.state);
  }
  render() {
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1, // will autoplay
        modestbranding: 1 // hide yt logo
      }
    };
    if(!this.props.video) {
      return (
        <div className="center">
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    const videoId = this.props.video.id.videoId;
    // const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="card">
        <div className="video-container">
          <YouTube
            videoId={videoId}
            opts={opts}
            onStateChange={this.onStateChange}
          />
        </div>
        <div className="card-content">
          <h4>{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
        <div className="card-content">
          <AudioSelector onAudioSelectorChange={this.handleAudioChange}/>
        </div>
        <div className="card-content">
          <LyricsFilter songTitle={this.props.video.snippet.title}/>
        </div>
        <div className="card-content">
          <CommentFilter/>
        </div>
      </div>
    );
  }
}

export default Video;
