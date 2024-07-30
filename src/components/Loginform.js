// Child component
import React from 'react';

function LoginForm({ isLoggedIn, onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;