import React, {useState} from 'react'
import './spinHalf.css'
import * as math from 'mathjs';

function SpinHalf() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);

  function handleInput1Change(event) {
    setInput1(event.target.value);
  }

  function handleInput2Change(event) {
    setInput2(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const res1 = (math.evaluate(input1) ** 2);
    const res2 = (math.evaluate(input2) ** 2);
    if (res1 + res2 <= 1){
      setResult1(res1);
      setResult2(res2);
    }
    else{
      setResult1("Impossible Probability");
      setResult2("Impossible Probability");
    }
  }
  return (
    <section id='spinHalf'>
      <h5>calculate</h5>
      <h2>Spin Half System Probability</h2>

      <div className="container calculator1__container">
        <div className="calc1__titles">
          <article className="calc1__title">
            <h5>Spin Up Value</h5>
          </article>
          <article className="calc1__title">
            <h5>Spin Down Value</h5>
          </article>
        </div>
        <form onSubmit={handleSubmit} className="calculationForm1">
          <input type="text" class="spinUpProb1" value={input1} onChange={handleInput1Change} />
          <input type="text" class="spinDownProb1" value={input2} onChange={handleInput2Change} />
          <button type="submit" className="btn btn-primary" >calculate</button>
        </form>
        <div>
          <h5>Outputs:</h5>
        </div>
        <div className="calc1__probabilities">
          <div className="calc1">
            <label className="spinUp1" id="calculated1">
              {result1 !== null && <p> {result1}</p>}
            </label>
          </div>
          <div className="calc1">
            <label className="spinDown1" id="calculated2">
              {result2 !== null && <p> {result2}</p>}
            </label>
          </div>
        </div>
      </div>
      <div className="info1">
        <h2>
          Spin Half Systems Information
        </h2>
        <p>
          fjdksl;afjdkasl;fjdkal;fjdksal;dd
        </p>
      </div>
    </section>
  )
}

export default SpinHalf