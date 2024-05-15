import React from 'react'
import { Provider } from 'react-redux'
import { store } from './services/store'
import { BrowserRouter } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    {children}
                </Provider>
            </BrowserRouter>
        </>
    )
}

export default Layout
