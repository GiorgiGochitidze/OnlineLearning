import Vior from './assets/vior.png'
import { motion } from 'framer-motion'
import './App.css'

function Home() {

    const Html = () => (
        <motion.h3 transition={{ duration: 0.3}} className='little-games' whileHover={{translateY: -5}}>HTML</motion.h3>
    )

    const Css = () => (
        <motion.h3 transition={{ duration: 0.3}} className='little-games' whileHover={{translateY: -5}}>CSS</motion.h3>
    )

    const Js = () => (
        <motion.h3 transition={{ duration: 0.3}} className='little-games' whileHover={{translateY: -5}}>Javascript</motion.h3>
    )

    const React = () => (
        <motion.h3 transition={{ duration: 0.3}} className='little-games' whileHover={{translateY: -5}}>React JS</motion.h3>
    )

    return(
    <div className='container'>
      <header>
        <nav>
          <img alt="a vior logo" src={Vior}/>
          <a>მთავარი</a> <a>კურსები</a> <a>ჩვენს შესახებ</a> <a>კონტაქტი</a>
        </nav>
      </header>

      <div className='body-container'>
        <div className='aboutus-main-container'>
            <div>
                <h3 style={{paddingInline: '15px'}}>ვინ ვართ ჩვენ?</h3>
                <img style={{borderRadius: '20px'}} alt="a vior logo" src={Vior}/>
            </div>

            <div className='about-us-content'>
                <div style={{overflow: 'hidden', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: '70px'}}>
                    <Html /> <React />
                </div>
                <p>ჩვენ ვართ გუნდი რომელიც ცდილობს მიაწოდოს ახალ
                ადამიანებს ამ სფეროში საჭირო მასალები და დააკვალიანოს
                ისინი სწორ გზაზე</p>
                <div style={{overflow: 'hidden', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                <Css /> <Js />
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Home