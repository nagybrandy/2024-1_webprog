import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

const Layout = ({ children }) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    )
}

export default Layout
