import React, { useState } from 'react'
import { useLoginUserMutation, useRegisterUserMutation } from '../../store/graphilogicsApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/authSlice'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [loginUser, {isLoading, error}] = useLoginUserMutation()
  const [registerUser, {isLoading: isLoadingRegister, error: errorRegister, data : dataRegister}] = useRegisterUserMutation()
  const [form, setForm] = useState({email: '', password: ''})
  const user = useSelector(state => state.auth)
  const dispatch = useDispatch()

  console.log(error)
  const handleInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  const handleLogin = () => {
    loginUser(form).then(e => dispatch(login(e.data)))
  }

  const handleRegister = () => {
    registerUser(form)
  }
  console.log(errorRegister)
  if(user?.data?.accessToken) return <Navigate to="/game" />
  return (
    <div>
      <h2>Login</h2>
      <h3>Email</h3>
      <input type="email" onInput={handleInput} name="email" value={form.email}/>
      <h3>Password</h3>
      <input type="password" onInput={handleInput} name="password" value={form.password}/><br /><br />
      <button onClick={handleLogin}>Bejelentkezés</button>
      <button onClick={handleRegister}>Regisztráció</button>

      {error && <p>{error.data.message}</p>}
      {errorRegister && <p>Registrációs hiba: {errorRegister.data.message}</p>}
      {dataRegister && <p>Regisztráció sikeres</p>}
    </div>
  )
}

export default Login
