import React from 'react';
import useLogin from '~/views/Login/useLogin';

import LoadingDots from '../../shared/components/LoadingDots';
import ErrorBlock from '../ErrorBlock';
import './login-style.scss';

const Login = () => {
  const {
    username,
    onUsernameChange,
    password,
    onPasswordChange,
    errorMessage,
    onSubmit,
    isLoading
  } = useLogin()

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={onSubmit}>
        <h1 className="text-center">
          Password Health
        </h1>

        <input
          value={username}
          onChange={onUsernameChange}
          placeholder="Username"
          type="text"
        />

        <input
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          type="password"
        />

        <ErrorBlock error={errorMessage}/>

        <button type="submit" className="button" disabled={!username || !password || isLoading}>
          {isLoading ? <LoadingDots /> : 'Login'}
        </button>
      </form>
    </div>
  )
};

export default Login;
