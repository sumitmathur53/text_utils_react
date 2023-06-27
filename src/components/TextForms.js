import React,{useState} from "react";



export default function TextForms(props) {

    const handleupclick=()=>{
        // console.log("Uppercase clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloclick=()=>{
      // console.log("Uppercase clicked"+text);
      let newText = text.toLowerCase();
      setText(newText);
  }

    const handleonchange = (event)=>{
        setText(event.target.value);
    }

    const handleclear=(event)=>{
      setText('')
    }

    



    const [text, setText] = useState('');

    // text = "javcj" this is wrong way to change.

    // setText("new text value")  --> this is the correct value to change

  return (
    <>
      <div className="container">
      <h1>{props.heading}</h1>
      <form>
        <div className="mb-3">
          <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleonchange}></textarea>
        </div>
      </form>

      <button className="btn-btn-primary mx-2" onClick={handleupclick}>Convert to Upper Case</button>
      <button className="btn-btn-primary" onClick={handleloclick}>Convert to lower Case</button>
      <button className="btn-btn-primary mx-2" onClick={handleclear}>clear text</button>
      </div>

      {/* this is for the word cound feature */}

      <div className="container my-3">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length}</p>

        {/* average user minutesread */}

        <p>{0.008*text.split(" ").length} minutes read</p>

        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
    
  );
}
