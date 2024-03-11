import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";
import { Menu } from "./menu/Menu";

export function App() {
  return (
    <div className="ui container">
      <Menu />
      <Home />
      <Playlists />
      <Tracks />
      <Search />
    </div>
  );
}
