import React from 'react'
import './spinHalf.css'

const SpinHalf = () => {
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
        <form className="calculationForm1">
          <input type="text" class="spin-up-prob" />
          <input type="text" class="spin-down-prob" />
          <button className="btn btn-primary">calculate</button>
        </form>
        <div>
          <h5>Outputs:</h5>
        </div>
        <div className="calc1__probabilities">
          <div className="calc1">
            <label className="spinUp1" id="spinUp__prob1"></label>
          </div>
          <div className="calc1">
            <label className="spinDown1" id="spinDown__prob1"></label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpinHalf