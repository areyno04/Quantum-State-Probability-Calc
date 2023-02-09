import React, {useState} from 'react'
import * as math from 'mathjs';
import './spinOne.css'


function SpinOne() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);

  function handleInput1Change(event) {
    setInput1(event.target.value);
  }

  function handleInput2Change(event) {
    setInput2(event.target.value);
  }
  
  function handleInput3Change(event) {
    setInput3(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const res1 = (math.evaluate(input1) ** 2);
    const res2 = (math.evaluate(input2) ** 2);
    const res3 = (math.evaluate(input3) ** 2);
    if (res1 + res2 + res3 <= 1){
      setResult1(res1);
      setResult2(res2);
      setResult3(res3);
    }
    else{
      setResult1("Impossible Probability");
      setResult2("Impossible Probability");
      setResult3("Impossible Probability");
    }
  }

  return (
    <section id='spinOne'>
      <h5>calculate</h5>
      <h2>Spin One System Probability</h2>

      <div className="container calculator2__container">
        <div className="calc2__titles">
          <article className="calc2__title">
            <h5>Spin Up Value</h5>
          </article>
          <article className="calc2__title">
            <h5>Spin Zero Value</h5>
          </article>
          <article className="calc2__title">
            <h5>Spin Down Value</h5>
          </article>
        </div>
        <form onSubmit={handleSubmit} className="calculationForm2">
          <input type="text" class="spin-up-prob2" value={input1} onChange={handleInput1Change} />
          <input type="text" class="spin-zero-prob" value={input3} onChange={handleInput3Change}/>
          <input type="text" class="spin-down-prob2" value={input2} onChange={handleInput2Change} />
          <button className="btn btn-primary" id="calculate2">calculate</button>
        </form>
        <div>
          <h5>Outputs:</h5>
        </div>
        <div className="calc2__probabilities">
          <div className="calc2">
            <label className="spinUp2" id="spinUp__prob2"> 
              {result1 !== null && <p> {result1}</p>}
            </label>
          </div>
          <div className="calc2">
            <label className="spinZero" id="spinZero__prob">
              {result3 !== null && <p> {result3}</p>}
            </label>
          </div>
          <div className="calc2">
            <label className="spinDown2" id="spinDown__prob2">
              {result2 !== null && <p> {result2}</p>}
            </label>
          </div>
        </div>
      </div>
      <div className="info2">
        <h2>
          Spin One Systems Information
        </h2>
        <p>
          fjdksl;afjdkasl;fjdkal;fjdksal;f
        </p>
      </div>
    </section>
  )
}

export default SpinOne