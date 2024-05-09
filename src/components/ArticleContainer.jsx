import React, { useState } from 'react'
import meal1 from "../assets/meal1.png"
import meal2 from "../assets/meal2.png"
import meal3 from "../assets/meal3.png"
import meal4 from "../assets/meal4.png"
import meal5 from "../assets/meal5.png"
import meal6 from "../assets/meal6.png"
import { ArticleCard } from './ArticleCard'
import {AiOutlineRight} from "react-icons/ai"
import {AiOutlineLeft} from "react-icons/ai"

const article1 = [
  {
    key: "1",
    img: meal1,
    header: "Grilled Tomatoes at Home",
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    key: "2",
    img: meal2,
    header: "Snacks for Travel",
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    key: "3",
    img: meal3,
    header: "Post-Workout Recipes",
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
]

const article2 = [
  {
    key: "4",
    img: meal4,
    header: "How To Grill Corn",
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    key: "5",
    img: meal5,
    header: "Crunchwrap Supreme",
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    key: "6",
    img: meal6,
    header: "Brocolli Cheese Soup",
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
]

export const ArticleContainer = () => {
  const [change, setChange] = useState(false)
  const articles1 = article1.map((art) =>{
    return <ArticleCard key={art.key} img={art.img} header={art.header} desc={art.desc}/>
  })
  const articles2 = article2.map((art) =>{
    return <ArticleCard key={art.key} img={art.img} header={art.header} desc={art.desc}/>
  })

  return (
    <section className='w-10/12 mx-auto'>
      <h2 className='font-source text-4xl lg:text-5xl font-semibold tracking-wide'>Latest Articles</h2>
      <div className={`${!change ? 'flex' : 'hidden'} flex-col lg:flex-row flex-wrap justify-between mt-20 gap-16 lg:gap-0`}>
        {articles1}
      </div>
      <div className={`${change ? 'flex' : 'hidden'} flex-col lg:flex-row flex-wrap justify-between mt-20`}>
        {articles2}
      </div>
      <div className='flex items-center gap-2 my-20 justify-center'>
        <AiOutlineLeft className={`border ${change ? "text-blueish border-blueish" : "text-gray-400 border-gray-400"} h-6 w-6 rounded-md cursor-pointer`} onClick={()=>setChange(false)}/>
        <span>{change ? "2/2" : "1/2"}</span>
        <AiOutlineRight className={`border ${!change ? "text-blueish border-blueish" : "text-gray-400 border-gray-400"} h-6 w-6 border-black rounded-md cursor-pointer`} onClick={()=>setChange(true)}/>
      </div>
    </section>
  )
}
