import React from 'react'
import { FaHome as HomeIcon } from "react-icons/fa";
import { FaHeadphones as HeadphonesIcon } from "react-icons/fa";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { FaMusic as MusicIcon } from "react-icons/fa";
import { FaUser as UserIcon } from "react-icons/fa";
import logo from "./logo.png"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../../store/firebase/firebase';
import { login } from '../../store/reducers/userSlice';
import { signInWithPopup } from 'firebase/auth';


export const Menu = () => {
    const { user, isLoggedIn, img } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                //console.log(result.user.displayName)
               // console.log(result.user)
                dispatch(login({ user: result.user.displayName, img: result.user.photoURL }))
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                return errorCode
            });
    }
    console.log(user)
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="item" to="/home">
                                <HomeIcon /> Home
                            </Link>
                        </li>
                        <li>
                            <Link className="item" to="/playlists">
                                <HeadphonesIcon /> My Playlists
                            </Link>
                        </li>
                        <li>
                            <Link className="item" to="/tracks">
                                <MusicIcon /> Tracks
                            </Link>
                        </li>
                        <li>
                            <Link className="item" to="/search">
                                <SearchIcon /> Search
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-64"><img src={logo} alt="" /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link className="item" to="/home">
                            <HomeIcon /> Home
                        </Link>
                    </li>
                    <li>
                        <Link className="item" to="/playlists">
                            <HeadphonesIcon /> My Playlists
                        </Link>
                    </li>
                    <li>
                        <Link className="item" to="/tracks">
                            <MusicIcon /> Tracks
                        </Link>
                    </li>
                    <li>
                        <Link className="item" to="/search">
                            <SearchIcon /> Search
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div className="w-24 rounded-xl">
                        <img src={user ? img : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                    </div>
                    <div tabIndex={0} role="button" className="btn m-1"><UserIcon />{isLoggedIn ? user : "Jelentkezz be!"}</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                        <li><Link>Playlists</Link></li>
                        <li><Link onClick={signIn}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

