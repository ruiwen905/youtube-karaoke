import React from 'react'

const VideoListItem = ({video , onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div className="card" onClick={() => onVideoSelect(video)}>
      <div className="media-left">
        <img className="card-image" src={imageUrl} alt='video thumbnails'/>
      </div>
      <div className="media-body">
        <div className="card-content">{video.snippet.title}</div>
      </div>
    </div>
  )
};

export default VideoListItem;
