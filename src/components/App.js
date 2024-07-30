
import React,{useState} from "react";
import './../styles/App.css';
import LoginForm from './components/LoginForm';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  return (
    <div>
        {/* Do not remove the main div */}
     
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      {isLoggedIn ? <p>You are logged in!</p> : <p>Please log in.</p>}
  

    </div>
  )
}

export default App
