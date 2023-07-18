import React from 'react'
import user from '../assets/user.png'

const Testimonials = () => {
  return (
    <div id='testimonials'>
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard  name={'Rahul'} feedback={"Your Teaching Skills are so good."} />
        <TestimonialCard  name={'Mamta Mam'} feedback={"Keep Working Hard and Never Give Up."} />
        <TestimonialCard  name={'Monika Mam'} feedback={"Don't Stop Until Dream became true."} />
      </section>
    </div>
  )
}
const TestimonialCard = ({name, feedback}) =>(
     <>
        <article>
            <img src={user} alt="user" />
            <h4>{name}</h4>
            <p>{feedback}</p>
        </article>
    </>
)



export default Testimonials
