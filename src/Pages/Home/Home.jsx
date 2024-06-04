import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Work from '../../Components/Work/Work'
import About from '../About/About'
import Skills from '../../Components/Skills/Skills'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Work/>
      <About sm_heading={'About Me'} heading={'A Passionate Developer Who Loves to Code'}/>
      <Skills sm_heading={'Skills'} heading={'I Work Hard to Improve My Skills Regularly'}/>
    </div>
  )
}

export default Home