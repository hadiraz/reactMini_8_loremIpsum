import { useState } from 'react';
import './assets/App.css';
import data from "./data"
function App() {

  const [number,setNumber] = useState(0);
  const [text,setText] = useState([]);
  const [copy , setCopy] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(data.slice(0,number));
  }

  const checkValue = (event) => {
    let value = event.target.value ;
    if(value > data.length){
      value = data.length
    }
    if(value <= 0){
      value = 0
    }
    setNumber(Number(value))
    setCopy(false)
  }

  const copyToClipBoard = () => {
    const input = document.querySelector(".hidden-input").value;
    navigator.clipboard.writeText(input);
    setCopy(true)
  }

  let buttonStatus = "btn-secondary" ;

  copy ? buttonStatus = "btn-success" : buttonStatus = "btn-secondary" ;

  return (
    <main className="container-fluid App d-flex flex-column justify-content-center align-items-center h-100">
      <h2 className="title d-flex justify-content-center align-items-center w-100 mb-5">
        Lorem Ipsum Maker
      </h2>
      <section className="input-box d-flex justify-content-center align-items-center mb-5">
        <form onSubmit={e=>handleSubmit(e)} className="input-form d-flex w-100 justify-content-center align-items-center">
          <label htmlFor="number" className="input-desc m-0">number of paragraphs : </label>
          <input className="paragraph-number" type="number"
          id="number" name="number" value={number} onChange={(e)=>checkValue(e)}/>
          <button className="input-btn btn btn-secondary" type="submit">
            Generate
          </button>
        </form>
        {
          text.length > 0 ? <button className={`btn btn-secondary copy-btn ${buttonStatus}` } onClick={copyToClipBoard}>
          copy to clipboard
        </button> : ""

        }
        
      </section>
      <section className="paragraphs-container d-flex flex-column w-100 justify-content-center align-items-center ">
        <input className="hidden-input" type="hidden" value={text.join(" <br> ")}/>
        {
          text.map((value,index)=>{
            return(
             <p key={index} className="lorem-item">
              {value}
            </p> 
            )
          })
        }
        
      </section>
    </main>
  );
}

export default App;
