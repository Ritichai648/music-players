import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css'
import Swal from 'sweetalert2';
import 'animate.css'

function App() {
  const [videoInput, setVideoInput] = useState('');
  const [playlistInput, setPlaylistInput] = useState('');
  const [playing, setPlaying] = useState(false);

  const handleVideoInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setVideoInput(event.target.value);
  };

  const handlePlaylistInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPlaylistInput(event.target.value);
  };

  const handlePlayClick = () => {
    setPlaying(true);
  };

  const handleplayInfo = () => {
    Swal.fire({
      icon: 'question',
      title: 'How To Get Video URL',
      text: 'Right Clink On A Video And Clink Copy Link',
      background: '#242424',
      color: 'white',
      timer: 4000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  const handleplaylistInfo = () => {
    Swal.fire({
      icon: 'question',
      title: 'How To Get Playlist URL',
      text: 'Right Clink On A Playlist And Clink Copy Link',
      background: '#242424',
      color: 'white',
      timer: 4000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  return (
    <div className="App">
      <h1>YouTube Video Player</h1>
      <div className="input-control">
        <div className="video-player-container">
          <input
            style={{ width:'300px' }}
            type="text"
            placeholder="Enter YouTube video URL"
            value={videoInput}
            onChange={handleVideoInputChange}
          />
          <button onClick={handlePlayClick}>Play</button>
          <a style={{ cursor: 'pointer' }} onClick={handleplayInfo}><svg xmlns="http://www.w3.org/2000/svg" x="21px" y="24px" width="24" height="21" viewBox="0 0 24 24">
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path>
          </svg></a>
        </div>

        <div className="playlist-input-container">
          <input
            style={{ width:'280px' }}
            type="text"
            placeholder="Enter YouTube Playlist URL"
            value={playlistInput}
            onChange={handlePlaylistInputChange}
          />
          <button onClick={handlePlayClick}>Playlist</button>
          <a style={{ cursor: 'pointer' }} onClick={handleplaylistInfo}><svg xmlns="http://www.w3.org/2000/svg" x="21px" y="24px" width="24" height="21" viewBox="0 0 24 24">
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path>
          </svg></a>
        </div>
      </div>


      {playing && (
        <ReactPlayer
          url={playlistInput || videoInput}
          controls
          width="890px"
          height="500px"
          playing={playing}
          onEnded={() => setPlaying(false)}
        />
      )}
    </div>
  );
}

export default App;
