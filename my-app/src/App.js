import logo from './logo.svg';
import './App.css';
import Navbar1 from './componants/Navbar1';
import Textform1 from './componants/Textform1';
import { useState } from 'react';
// import About from './componants/About';

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
    <>
    <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
      <Textform1 heading="enter the text to analys"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
