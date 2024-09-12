import React, {useState} from 'react'


export default function TextForm(props) {

    const HandleUpCase =()=>{
     console.log("UpperCase was Click");
     let newText = text.toUpperCase();
     setText(newText)
    }
    const HandleloCase =()=>{
        console.log("LowerCase was Click");
        let newText = text.toLowerCase();
        setText(newText)
       }
    const HandleclCase =()=>{
        let newText =""
        setText(newText)
       }
   

    const handleOnChange =(event)=>{
        console.log("OnChange");
        setText(event.target.value);
       }
    const [text, setText] = useState("Enter Text Here");
  return (
    <>
<div className='container' style={{color:props.mode ==='dark'?'white':'black'}}>
    <h1>
        {props.heading}
    </h1>
     <div className="mb-3" >
     <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'gray':'white'}} id="myBox" rows="8"></textarea>
    </div>
    <button className= "btn btn-primary my-2 " onClick={HandleUpCase}>Convert To UpperCase</button>
    <button className= "btn btn-primary mx-2 my-2" onClick={HandleloCase}>Convert To UpperCase</button>
    <button className= "btn btn-primary mx-2 my-2" onClick={HandleclCase}>Clear Text</button>
    
   
</div>
<div className="container  my-3" style={{backgroundColor:props.mode ==='dark'?'gray':'white', color:props.mode ==='dark'?'white':'black'}}>
<h1>Your Text Summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}). length} Words, {text.length} Characters</p>
</div>
</>
  )
}
