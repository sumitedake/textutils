import logo from './logo.svg';
import './App.css';
import Navbar1 from './componants/Navbar1';
import Textform1 from './componants/Textform1';
import { useState } from 'react';
import About from './componants/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('dark');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode = 'dark';
    }
    else{
      setMode = 'light';
    }
  }
  return (
    <Router>
    <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    {/* <Switch>
          <Route path="/about">
            <About /> 
          </Route>
         
          <Route path="/">
          
          </Route>
        </Switch> */}
        <Textform1 heading="enter the text to analys"/>
      <About/>
    </div>
    </Router>
  );
}

export default App;
