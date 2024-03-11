import { Menu } from "./menu/Menu";
import { PlaylistForm } from "./playlists/PlaylistForm";
import { PlaylistList } from "./playlists/PlaylistList";

import { examplePlaylists } from "../domain/playlist";

export function App() {
  const playlists = examplePlaylists;

  return (
    <div className="ui container">
      <Menu />
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <div className="ui six wide column">
            <h3>Playlists</h3>
            <PlaylistForm />
            <PlaylistList playlists={playlists} />
          </div>
        </div>
      </div>
    </div>
  );
}
