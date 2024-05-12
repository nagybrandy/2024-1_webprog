import React, { useState } from 'react'
import { useLoginUserMutation, useRegisterUserMutation } from '../../store/graphilogicsApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/authSlice'
import { Navigate } from 'react-router-dom'
const defaultState = {
  email: '',
  password: ''
}
const Login = () => {
  const [loginUser, { isLoading, data, error }] = useLoginUserMutation()
  const [registerUser, { isLoading: isLoading2, data: data2, error : error2 }] = useRegisterUserMutation()
  const [form, setForm] = useState(defaultState)
  console.log(data)
  const dispatch = useDispatch()
  const loginData = useSelector(state => state.auth.data)
  console.log(loginData)
  const handleLogin = () => {
    console.log(form)
    loginUser({ ...form, strategy: "local" }).then(e => dispatch(login(e)))
  }

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSignUp = () => {
    registerUser(form).then(e => console.log(e))
  }
  console.log(loginData?.data.accessToken)
  console.log(error2, error2)
  if (data) return <Navigate to="/game" />
  return (
    <div>
      <form noValidate>
        <h2>Email</h2>
        <input type="email" onInput={handleInput} name="email" value={form.email} />
        <h2>Password</h2>
        <input type="password" autoComplete="true" name="password" onInput={handleInput} value={form.password} /><br /><br />
        <button onClick={handleLogin} type='button'>Login</button>
        <button onClick={handleSignUp} type='button'>Sign up</button>
      </form>
      {data2 ? <p>Sikeres regisztráció!</p> : ""}
      {error2 ? <p>{error2.data.message}</p> : ""}
    </div>
  )
}

export default Login
