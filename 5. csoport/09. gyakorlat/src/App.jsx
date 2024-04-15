import React from 'react';
import { Playlists } from './views/playlists/Playlists';
import { Search } from './views/search/Search';
import { Tracks } from './views/tracks/Tracks';
import { Home } from './views/home/Home';
import { Menu } from './views/layout/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './views/layout/Layout';

export function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/playlists/:plid?/track?/:trid?' element={<Playlists />} />
            <Route path='/search' element={<Search />} />
            <Route path='/tracks' element={<Tracks />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}