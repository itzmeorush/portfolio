import React from 'react'
import {motion} from 'framer-motion'
import {AiFillIeCircle, AiFillAndroid, AiFillWindows,  AiFillChrome} from 'react-icons/ai'
import {FaFigma} from 'react-icons/fa'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoNodejs} from 'react-icons/bi'

const Services = () => {

    const animations = {
        whileInView:{
            x:0,
            y:0, 
            opacity:1,
        },
        one:{
            opacity:0,
            x:'-100%',
        },
        two:{
            opacity:0,
            y:'-100%',
        },
       
        four:{
            opacity:0,
            x:'100%',
        }
    }

  return (
    <div id='services'>
      <h2>Services</h2>
      <section>
        <motion.div className="serviceBox1"  whileInView={animations.whileInView}
        initial={animations.one}>
            <h3>9+</h3>
            <p>Months Experience</p>
        </motion.div>
        <motion.div className="serviceBox2"  initial={animations.two}  whileInView={animations.whileInView}>
       <BiLogoReact/>
            <span>Frontend Development</span>
        </motion.div>
        <motion.div className="serviceBox3" transition={{delay:0.2}}  initial={animations.two}  whileInView={animations.whileInView}>
            <FaFigma/>
            <span>Ui/Ux Development</span>
        </motion.div>
        <motion.div className="serviceBox4"  initial={animations.four} whileInView={animations.whileInView}>
            <BiLogoNodejs/>
            <span>Backend Development</span>
        </motion.div>
      </section>
    
    </div>
  )
}

export default Services
