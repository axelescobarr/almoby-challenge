import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes} from 'react-router-dom';

//importación de componentes
import { Home } from './screens/home/Home';
import { SignUp } from './screens/signUp/SignUp';


function App() {

  return (
    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/sign-up" element={<SignUp/>}/>
    </Routes>
  )
}

export default App
