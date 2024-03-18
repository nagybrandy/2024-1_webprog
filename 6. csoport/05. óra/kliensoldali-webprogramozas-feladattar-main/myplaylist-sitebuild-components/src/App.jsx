import Navbar from "./Navbar";
import PlaylistsList from "./PlaylistsList";
import SongList from "./SongList";
import Song from "./Song";
import { useState } from "react";

function App() {
  const [selectedPl, setSelectedPl] = useState(1)
  const [selectedSong, setSelectedSong] = useState(1)
  
  return (
    <div className="ui container">
      <Navbar />
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <div className="ui six wide column">
            <PlaylistsList selectedPl={selectedPl} setSelectedPl={setSelectedPl} />
          </div>
          <div className="ui ten wide column">
            <SongList selectedPl={selectedPl} selectedSong={selectedSong} setSelectedSong={setSelectedSong} />
          </div>
        </div>
        <div className="ui divider"></div>
        <Song selectedSong={selectedSong}/>
      </div>
    </div>
  )
}

export default App;
