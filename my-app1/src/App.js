import logo from './logo.svg';
import './App.css';
import React,{useState, usestate} from "react"

function App() {
  const [weight,setWeight] = useState(0);
  const [weight,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');


  let reload =()=>{
    window.location.reload()
  }


  let calcBmi = (e)=>{
   
    if(weight===0 || height===0){
      alert('plz enter valid weight and height')

    }
    else{
      let bmi = ( weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('you are underweight')

      }
      else if (mi>=25 && bmi < 30){
        setMessage('you are helthy wight')
      }
      else{
        setMessage('you are over weight')
      }
    }

  

  }






  return (
    <div className="App">
     <div className="container">
      <h1>BMI calculator</h1>
      <form onSubmit={calcBmi}>
        <div>
          <lable>weight (lbs)</lable>
          <input 
          type="text" 
          placeholder="enter weight value"
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
          />
        </div>
        <div>
          <lable>height (in)</lable>
          <input 
          type="text" 
          placeholder="enter weight value" 
          value={height}
          onChange={(e)=>setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" onclick={reload} type="submit">Reload</button>
        </div>
        <div className="center">
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>

        </div>
      </form>
     </div>
    </div>
  );
}

export default App;
