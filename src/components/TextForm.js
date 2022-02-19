import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  function textChange(event) {
    setText(event.target.value);
  }
  function clickUp() {
    setText(text.toUpperCase());
    props.showalert("Text Converted to UPPERCASE","success");
  }
  function clickLow() {
    setText(text.toLowerCase());
    props.showalert("Text Converted to LOWERCASE","success");
  }
  function clickClear() {
    setText("");
     props.showalert("Text Cleared","success");
  }
  function noofwords(){
     
     let res=text.trim();
     
    let words=res.split(/\s+/);

    let sb=0;
    
    // for(let i=0;i<res.length;i++){
    //   if(res[i]===' '){
    //     let j=i+1;
    //     while(j<res.length && res[j]===' ') {sb++;j++;}
    //     i=j-1;
    //   } 
    // }
     
     if(text.length===0) return 0;
     else return words.length-sb;
     
    
  }
  function caltime(){
    let res=text.trim();
     
    let words=res.split(" ");

    let sb=0;
    
    for(let i=0;i<res.length;i++){
      if(res[i]===' '){
        let j=i+1;
        while(j<res.length && res[j]===' ') {sb++;j++;}
        i=j-1;
      } 
    }
     
     if(text.length===0) return 0;
     else return 0.008*(words.length-sb);
  }
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textArea"
            rows="8"
            value={text}
            onChange={textChange}
            style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#1F1A26':'white'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickUp}>
          Covert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickLow}>
          Covert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickClear}>
          Clear Text
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {noofwords()} words and {text.length} characters
        </p>
        <p>time to read {caltime()} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
