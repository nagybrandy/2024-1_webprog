import React from 'react'
import bonjoviPic from "../sitebuild/assets/bonjovi.jpg"
import { exampleTracks as tracks } from "../sitebuild/domain/track"

const Song = ({selectedSong}) => {
const song = tracks.find(e => e.id === selectedSong)
  return (
    <div className="ui segment">
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img src={bonjoviPic} />
        </div>
        <div className="content">
          <a className="header">{song.title}</a>
          <div className="meta"><span>{song.artist}</span><span>4:35</span></div>
          <div className="extra">
            <a
              href="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
              className="ui button tiny green button" target="_blank"
            >
              <i className="spotify icon"></i>
              Listen on Spotify
            </a>
            <a
              href="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
              className="ui button tiny teal button" target="_blank"
            >
              <i className="microphone icon"></i>
              Show lyrics
            </a>
            <a
              href="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
              className="ui button tiny orange button" target="_blank"
            >
              <i className="guitar icon"></i>
              Show chords
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Song
