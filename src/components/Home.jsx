import React, { useRef } from 'react'
import {animate, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
// import me from '../assets/logo.png'
import me from '../assets/logo1.jpg'

const Home = () => {

    const animation ={
        h1:{
            initial:{
                x:'-100%',
                opacity: 0,
            },
            whileInView:{
                x:0,
                opacity: 1,
            }
        },
        button:{
            initial:{
                y:'-100%',
                opacity: 0,
            },
            whileInView:{
                y:0,
                opacity: 1,
            }
        }
    }

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientCount = () =>{
        animate(0,100,{
            duration:1,
            onUpdate: (v)=>(clientCount.current.textContent = v.toFixed())
        })
    }
    const animationProjectsCount = () =>{
        animate(0,100,{
            duration:1,
            onUpdate: (v)=>(projectCount.current.textContent = v.toFixed())
        })
    }

  return (
    <div id='home'>
      <section>
        <div>
            <motion.h1 {...animation.h1} >
                Hi, I Am  <br /> Deepanshu Kushwaha
            </motion.h1>
            <Typewriter options={{
                strings:['A Developer', 'A Designer', 'A Creator'],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriterpara",
                cursor: ''
            }}/>
            <div>
            <a href="mailto:deepanshukushwaha166@gamil.com">
              Hire Me
             </a>
             <a href="#work">Projects  <BsArrowUpRight/> </a>
            </div>
            <article>
                <p>+<motion.span whileInView={animationClientCount} ref={clientCount}></motion.span></p>
                <span>Clients Worldwide</span>
            </article>
            <aside>
            <article>
                <p>+<motion.span ref={projectCount}  whileInView={animationProjectsCount}></motion.span></p>
                <span>Projects Done</span>
            </article>
            <article data-special>
                <p><span>Contact</span></p>
                <span>deepanshukushwaha166@gmail.com</span>
            </article>
            </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="img" />
      </section>
        <BsChevronDown/>
    </div>
  )
}

export default Home
