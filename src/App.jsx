import React from 'react'
import './App.css'

const App = () => {
  return (
  <section>
    <div className="container">
      <div className="cards">
        <div className="card">
          <div className="img">
            <img src="https://cdn.shopify.com/s/files/1/0640/3846/9846/files/air-jordan-1-retro-high-off-white-chicago-the-ten-469946.png?v=1723553375" alt="" />
          </div>
          <h3>Nike x Off-White</h3>
          <p>The 10:Air Jordan 1 off-white-Chicago</p>
          <p>$999</p>
          <button>Buy Now</button>


        </div>

        <div className="card card2">
          <div className="img">
            <img src="https://heycatan.myshopify.com/cdn/shop/products/aq0818_148_1_1000x.png?v=1563938446" alt="" />
          </div>
          <h3>Nike x Off-White</h3>
          <p>The 10:Air Jordan 1 off-white-Chicago</p>
          <p>$999</p>
          <button>Buy Now</button>


        </div>
      </div>
    </div>
  </section>
  )
}

export default App