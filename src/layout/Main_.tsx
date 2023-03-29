import React, { useState } from 'react'
import { changeTab, getTab } from '~/utils/scripts/getTabs';
import Mouse_ from './Mouse_'

function Main_() {
  const [selected, setselected] = useState(0);


  const select_ = (i: number) => {
    setselected( changeTab(i, selected) )
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-gradient-to-b from-[#6d3f02] to-[#151a2c]">
        <div className='absolute w-[5%] h-[80%] flex flex-col justify-evenly hover:left-0
        -left-10 transition-all duration-300 hover:scale-100 scale-90'>
            <div className='w-full h-[10%] rounded-tr-full bg-[#08080f]'/>
            <div className='w-full h-[80%] bg-[#08080f] flex flex-col justify-evenly items-center' id="buttons">
              {[...Array(6)].map((a,i) => (
                <button onClick={() => select_(i+1) } key={i}
                className={`btn ${selected == i+1 ? 'btn-act inte-btn-2' : 'inte-btn'} interact`}>
                  {i + 1}
                </button>
              ))}
            </div>
            <div className='w-full h-[10%] bg-[#08080f] rounded-br-full'/>
        </div>
        <div className='w-full h-screen flex items-center justify-center'>
            { getTab(selected) }
        </div>
        <Mouse_/>
        <style>
          {`
            .btn-act{
              background: #08080f;
              left: 1rem;
            }
          `}
        </style>
    </main>
  )
}

export default Main_