import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { GraphiLogics } from '../graphilogics/Graphilogics'

const UseAuth = ({children}) => {
  const user = useSelector(state => state.auth)
  console.log(user.data.accessToken)
  if(!user?.data.accessToken) {
    return <Navigate to="/login" />
}
  else return <>{children}</>
}

export default UseAuth
