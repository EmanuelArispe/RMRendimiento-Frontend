import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/loginComponent/Login.jsx";

function App() {

  return (
      <div className= "conteiner-app">
          <Login />
            <Header />
          <Main />
      </div>
  )
}

export default App
