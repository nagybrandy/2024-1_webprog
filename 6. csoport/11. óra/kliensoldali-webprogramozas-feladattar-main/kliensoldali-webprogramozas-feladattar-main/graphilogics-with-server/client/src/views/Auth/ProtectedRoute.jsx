import React from 'react'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  if(!cookies.token) return <Navigate to="/" />
  console.log(children)
  return (
    <>{children}</>
  )
}

export default ProtectedRoute
