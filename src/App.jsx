import { useState } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ArticleContainer } from './components/ArticleContainer'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='text-blueish font-open mx-auto'>
      <Hero/>
      <About/>
      <ArticleContainer/>
      <Footer/>
    </div>
  )
}

export default App
