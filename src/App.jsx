import { useState } from 'react'
import data from './data.json';
import React from 'react';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Container of the Card */}
      <div className='flex items-center justify-center container-card   h-screen'>
        {/* Section  of Result of the card */}
        <div className='flex flex-col mr-4 card-color items-center font-text rounded-[20px] first-card  w-[280px] text-center h-auto relative left-3  z-40'>
          <h2 className=' text-gray-200 my-5 font-text '>Your Result</h2>
          <div className='bg-Violet rounded-[50%] mb-5 w-40 h-40 flex flex-col circle'>
            <h1 className='pt-10 text-[50px] score font-[700] text-white'>76</h1>
            <span className='of text-[14px] text-lavande '>of 100</span>
          </div>
          <h2 className='text-[20px] text-white font-[700]'>Great</h2>
          <p className='my-4 text-[13px] text-lavande mb-4 rounded'>You scored higher than 65% of <br/> the people 
            who have taken <br /> these tests.</p>
        </div>
        {/* Section of the Summary of the card */}
        <div className=' w-[300px] second-card bg-[#fbf8f8] h-[365.5px] rounded-r-lg font-text py-4 pl-8  flex flex-col relative right-6  z-30 drop-shadow-xl '>
           <h2 className='title text-pale font-text font-semibold text-[18px] mb-4'>Summary</h2> 
           {data.map(item => (
        <div className='flex w-[245px] items-center  justify-around mb-2 h-11 rounded-[8px] cards-map' key={item.id} style={{ backgroundColor: item.backgroundColor }}>
          <div className=' flex flex-row'>
           <img src={item.icon}  />
           <h2 className='px-2 ' style={{ color:item.color}}>{item.category}</h2>
          </div>
          <p>{item.score}<span> /100</span></p>
        </div>
      ))}
            <h3 className='relative text-white flex justify-center mt-9  py-2 bg-[#303b5a] rounded-[18px] w-64 hover:bg-Violet cursor-pointer
            '>Continue</h3>
        </div>
      </div>
    </>
  )
}

export default App;
