import React from 'react';
import { Menu } from './Menu';
import { Provider } from 'react-redux';
import store from '../../store/store';

export function Layout({children}) {
  return (
    <div className="w-10/12 mx-auto">
      <Provider store={store}>
        <Menu />
        {children}
      </Provider>
    </div>
  );
}
