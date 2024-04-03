import React from 'react';
import { Menu } from './Menu';

export function Layout({children}) {
  return (
    <div className="w-10/12 mx-auto">
        <Menu />
        {children}
    </div>
  );
}
