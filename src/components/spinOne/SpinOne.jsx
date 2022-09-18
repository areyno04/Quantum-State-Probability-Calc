import React from 'react'
import './spinOne.css'

const spinOne = () => {
  return (
    <section id='spinOne'>
      <h5>calculate</h5>
      <h2>Spin Half System Probability</h2>

      <div className="container calculator2__container">
        <div className="calc2__titles">
          <article className="calc2__title">
            <h5>Spin Up Value</h5>
          </article>
          <article className="calc2__title">
            <h5>Spin Down Value</h5>
          </article>
        </div>
        <form className="calculationForm2">
          <input type="text" class="spin-up-prob" />
          <input type="text" class="spin-down-prob" />
          <button className="btn btn-primary">calculate</button>
        </form>
        <div>
          <h5>Outputs:</h5>
        </div>
        <div className="calc2__probabilities">
          <div className="calc2">
            <label className="spinUp2" id="spinUp__prob2"></label>
          </div>
          <div className="calc1">
            <label className="spinDown2" id="spinDown__prob2"></label>
          </div>
        </div>
      </div>
    </section>
  )
  )
}

export default spinOne