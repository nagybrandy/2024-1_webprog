import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../state/store'
import { CookiesProvider, useCookies } from 'react-cookie'

const Layout = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    return (
        <div>
            <CookiesProvider defaultSetOptions={{ path: '/' }}>
                <Provider store={store}>
                    {children}
                </Provider>
                <button onClick={()=> removeCookie('token')}>Kijelentkezés</button>
            </CookiesProvider>

        </div>
    )
}

export default Layout
