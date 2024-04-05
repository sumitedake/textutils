import React, {useState}from 'react'



 
export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("uppercase cliked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("lowercase cliked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        console.log("lowercase cliked"+ text);
        let newText = '';
        setText(newText)
    }
    
    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value);
    }
    const[text,setText] = useState('enter the text here');
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>


      
    </div>
    <div className='container my-3'>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}minutes read</p>
        <p>{}preview</p>
        <h3>{text}</h3>

    </div>
    </>
  )
}
