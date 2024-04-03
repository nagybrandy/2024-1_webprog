import React from 'react';
import { Playlists } from './views/playlists/Playlists';
import { Tracks } from './views/tracks/Tracks';
import { Menu } from './views/layout/Menu';
import { Search } from './views/search/Search';
import { Home } from './views/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './views/layout/Layout';

export function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/playlists/:plid?/track?/:trid?' element={<Playlists />} />
            <Route path='/tracks' element={<Tracks />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}