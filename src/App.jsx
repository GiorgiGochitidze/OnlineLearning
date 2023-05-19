import Vior from './assets/vior.png'
import './App.css'
import { animate, motion, transform } from 'framer-motion'


function App() {

  return (
    <div className='container'>
      <header>
        <nav>
          <img alt="a vior logo" src={Vior}/>
          <motion.a>მთავარი</motion.a> <a>კურსები</a> <a>ჩვენს შესახებ</a> <a>კონტაქტი</a>
        </nav>
      </header>

      <div className='courses-container'>
        <motion.div className="drag-area"/>
        <motion.div whileTap={{scale: 0.9, borderRadius: '50%'}} className='drag-div' drag dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}/>
      </div>
    </div>
  )
}

export default App
