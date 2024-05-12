

import { useState } from "react";
import Navbar from "./Navbar";
import PlaylistList from "./PlaylistList";
import Song from "./Song";
import SongList from "./SongList";
import { examplePlaylists as pl } from "../sitebuild/domain/playlist";

function App() {
  const [selectedPl, setSelectedPl] = useState(pl[0])
  const [selectedSong, setSelectedSong] = useState(null)
  return (
    <div className="ui container">
      <Navbar />
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <div className="ui six wide column">
            <PlaylistList selectedPl={selectedPl} setSelectedPl={setSelectedPl} setSelectedSong={setSelectedSong}/>
          </div>
          <div className="ui ten wide column">
            <SongList selectedPl={selectedPl}  selectedSong={selectedSong} setSelectedSong={setSelectedSong}/>
          </div>
        </div>
        <div className="ui divider"></div>
        <Song selectedSong={selectedSong} />
      </div>
    </div>
  )
}

export default App;
