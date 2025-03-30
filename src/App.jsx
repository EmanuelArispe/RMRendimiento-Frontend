import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/loginComponent/Login.jsx";
import {useState} from "react";

function App() {
 const [token, setToken] = useState(null);

 function handleToken(token) {
     setToken(token);
 }
  return (
      <div className= "conteiner-app">
          <Login addToken = {handleToken} />
          <Header/>
          <Main tokenValue = {token}/>
      </div>
  )
}

export default App
