import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './Component/Hero/Hero'
import Services from './Component/Services/Services'
import Banner from './Component/Banner/Banner'
import Blog from './Component/Blog/Blog'
import Footer from './Component/Footer/Footer'
import Footer1 from './Component/Footer1/Footer1'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower
      
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
          scale: 5,
          mixBlendMode: "difference",
        }}
      >
        <Navbar />
        <Hero/>
        <Services/>
        <Banner/>
<Blog/>
<Footer/>
<Footer1/>
        
      </UpdateFollower>
      

    </main>
  )
}

export default App
