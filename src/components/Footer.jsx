import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'
import user from '../assets/logo1.jpg'

const Footer = () => {
  return (
    <>
      <footer>
        <div>
            <img src={user} alt="founder" />
            <h2>Deepanshu Kushwaha</h2>
            <p>Motivation is temporary, but discipline last forever.</p>
        </div>
        <aside>
            <h2>Socail Media</h2>
            <article>
                <a href="https://instagram.com/itz_me_orush?igshid=ZDc4ODBmNjlmNQ==" target='blank'><AiFillInstagram/></a>
                <a href="https://www.linkedin.com/in/deepanshu-kushwaha-a2a58321b" target='blank'><AiFillLinkedin/></a>
                <a href="https://github.com/itzmeorush" target='blank'><AiFillGithub/></a>
            </article>
            <a href="#home" className='home'><AiOutlineArrowUp/></a>
        </aside>
      </footer>
    </>
  )
}

export default Footer
