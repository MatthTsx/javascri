import React from 'react'
import {useEffect, useState} from 'react'
import { Math_ } from '~/utils/classes'

function Five() {
    const [numbers, setNumbers] = useState<number[]>([])
    const [number, setNumber] = useState<number>()
    const math = new Math_()

    const calc = () => {
        try {
            const response_client = document.getElementById("response") as HTMLElement
            if(!number && number != 0){
                response_client.textContent = "insira um numero"
                return
            }
            setNumbers(math.getTabuada5(number))
            response_client.textContent = `tabuada de ${number}:`
        } catch (error) {}
    }

    useEffect(() => {
        calc()
    },[number])

  return (
    <div className='jss'>
        <div className='flex flex-col h-64 overflow-y-scroll'>
        {
          numbers?.map((n,i) => (
            <div key={i} className="flex justify-between w-[60%] border-b px-4 border-black">
              <div className=' flex flex-col'>
                <span className='font-semibold tracking-tighter'>{n}</span>
              </div>
            </div>
          ))
        }
      </div>
        <div>
            <label>numero: </label>
            <input type={"number"} onChange={(e) => setNumber( parseFloat(e.target.value) )} className={"interact inte-input"}/>
        </div>
        <p><span id="response"/></p>
    </div>
  )
}

export default Five