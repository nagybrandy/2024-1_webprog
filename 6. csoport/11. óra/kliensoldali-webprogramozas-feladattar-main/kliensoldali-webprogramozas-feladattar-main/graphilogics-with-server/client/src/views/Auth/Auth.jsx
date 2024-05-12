import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../state/graphilogicsApiSlice'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  console.log(cookies.token)
  const [formState, setFormState] = useState({ email: '', password: '' })
  const[login, { data, error, isLoading }] = useLoginMutation()
  const handleChange = (e) => {
    console.log(formState)
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    login({...formState, strategy: 'local'}).then(e => {console.log(e); setCookie('token', e.data.accessToken)})
  }

  if(cookies.token) return <Navigate to="/game" />
  return (
    <div>
      <h2>Bejelentkezés</h2>
      {error && <div>{error.data.message}</div>}
      <h3>Email</h3>
      <input type="text" name='email' value={formState.email} onChange={handleChange}/>
      <h3>Jelszó</h3>
      <input type="password" name='password' value={formState.password} onChange={handleChange}/><br /><br />
      <input type="submit" value="Küldés" onClick={handleLogin}/>
    </div>
  )
}

export default Auth
