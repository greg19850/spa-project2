import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="login">Type your login: </label><input type="text" id='login' />
      <label htmlFor="password">Type your password: </label><input type="password" id='password' />
    </div>
  );
}

export default LoginPage;
