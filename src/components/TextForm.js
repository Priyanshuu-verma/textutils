import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText =text.toUpperCase();
        settext(newText)
        props.showAlert("converted to uppercase","success");
        
    }
    const handleloClick = ()=>{
        // console.log("lowercase was clicked");
        let newText =text.toLowerCase();
        settext(newText)
        props.showAlert("converted to lowercase","success");
    }
    const handleCapClick = ()=>{
        // console.log("sentance capital was clicked");
        let newText =text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
        settext(newText)
        props.showAlert("converted to first letter capital","success");
    }
    const handleCapaClick = ()=>{
      //Each word capital
      let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    settext(newText);
    props.showAlert("converted to first letter capital","success");
    }
    const handleResClick = ()=>{
      //Remove extra space
      let newText = text.trim().split(/\s+/).join(" ");
    settext(newText)
    props.showAlert("Remove extra space!" , "success")
    }

    const handleCopyClick = () => {
      if (text.trim() !== "") {
        navigator.clipboard
          .writeText(text)
          .then(() => props.showAlert("Text copied to clipboard!" , "success"))
          .catch((err) =>console.error("Failed to copy" + err));
      }
      props.showAlert("copy text","success");
    };

    const handleOnChange = (event)=>{
        // console.log("On change");
        settext(event.target.value)
    }
    const [text, settext] = useState('');
    // settext="fffff"
  return (
    <>
    <div className='container ' style={{color:props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode === 'gray'?'white':'gray',color:props.mode === 'light'?'black':'white'}} id="myBox" rows="8" placeholder='Enter any one'></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleCapClick}> Capitalize Sentance</button>
        <button className='btn btn-primary mx-2' onClick={handleCapaClick}>Capitalize word</button>
        <button className='btn btn-primary mx-2' onClick={handleResClick}>Remove extra space</button>
        <button className='btn btn-primary mx-2' onClick={handleCopyClick}>copy text</button>
</div>
<div className="container my-2" style={{color:props.mode === 'light'?'black':'white'}}> 
  {/* my mean margin */}
  <h2>Your text summary</h2>
  <p>{(text.split(" ").length)-1} words and {text.length} characters</p>
  <p>{(0.008 * text.split(" ").length)-0.008} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}

