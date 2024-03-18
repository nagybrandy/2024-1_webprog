import { useState } from "react";
import Navbar from "./Navbar";
import PlaylistList from "./PlaylistList";
import TrackList from "./TrackList";
import Track from "./Track";
import { examplePlaylists  as pl} from "../sitebuild/domain/playlist";

function App() {
  const [selectedPl, setSelectedPl] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(null)
  return (
  <div className="ui container">
    <Navbar />
    <div className="ui container">
    <h1>My Playlists</h1>
    <div className="ui stackable two column grid">
      <div className="ui six wide column">
        <PlaylistList selectedPl={selectedPl} setSelectedPl={setSelectedPl } setSelectedTrack={setSelectedTrack} selectedTrack={selectedTrack}/>
      </div>
      <div className="ui ten wide column">
        <TrackList selectedPl={selectedPl} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack}/>
      </div>
    </div>
    <div className="ui divider"></div>
    <Track selectedTrack={selectedTrack}/>
    </div>
  </div>
)
}

export default App;
