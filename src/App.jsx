import { useState } from 'react'
import './App.css'
import IphoneRosa from './assets/iphonerosa.jpg'
import IphoneVerde from './assets/iphoneverde.jpg'
import IphoneCinza from './assets/iphonecinza.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header></header>
      <section className="produtos">

        {/* Produto 1 */}
        <a href="#" className="link-card">
        <div className="card">
        <img src={IphoneRosa} alt="" className="img-prod"/>
          <h2>Iphone Rosa</h2>
          <p className="desc">Iphone 15 (128GB) Rosa</p>
          <p className="preco">R$6.499,00</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (124)</div>
          <div className="off">-10% no pix</div>
        </div>
      </a>
        {/* Produto 2 */}
        <a href="#" className="link-card">
        <div className="card">
        <img src={IphoneVerde} alt="" className="img-prod"/>
          <h2>Iphone Verde</h2>
          <p className="desc">Iphone 15 (256GB) Verde</p>
          <p className="preco">R$4.558,00</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ★ </span> (226)</div>
          <div className="off">-15%</div>
        </div>
      </a>
        {/* Produto 3 */}
        <a href="#" className="link-card">
        <div className="card">
        <img src={IphoneCinza} alt="" className="img-prod"/>
          <h2>Iphone Titânio</h2>
          <p className="desc">IPhone 16 Pro Max (1TB) Titânio Natural</p>
          <p className="preco">R$11.998,00</p>
          <div className="avaliacao"> <span>★ ★ ★ ☆ ☆</span> (85)</div>
          <div className="off">-10% no pix</div>
        </div>
      </a>

      </section>
      <section className="destaque"></section>
      <footer></footer>
     </main>
    </>
  )
}

export default App
