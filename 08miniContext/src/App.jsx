
import UserContextProvider from './Context/userContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {


  return (
    <UserContextProvider>
      <h1>React with Me </h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
