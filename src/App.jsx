import React from 'react'
import './Styles/global.css'
import './style.css'
import Esquerdo from './Components/Layout/Esquerdo/Esquerdo'
import Direito from './Components/Layout/Direito/Direito'
import Footer from './Components/Layout/Footer/Footer'


function App() {

  return (
    <>
    <div className='container-main'>
      <div className="container-esquerdo">
        <Esquerdo/>
      </div>
      <div className="container-direito">
        <Direito/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default App
