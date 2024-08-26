import React from 'react'
import Blog from './blog/Blog'
import Layout from './components/navbar/Layout/Layout'
import Footer from './components/navbar/Layout/Footer'


const Home = () => {
  return (
    <Layout>
      <div className='flex flex-wrap justify-center space-x-4 mt-5'>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      </div>
      <Footer/>
      
    
     
    </Layout>
  
  
  )
}

export default Home
