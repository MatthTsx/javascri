import React from 'react'
import { ImBin2 } from 'react-icons/im'
import { Math_ } from '~/utils/classes'
import {useState, useEffect} from 'react'

function Six() {
    const [numbers, setNumbers] = useState<number[]>([])
    const [upd, setUpd] = useState(1)
    const math = new Math_()
  
      const calc = () => {
          try {
              const response_client = document.getElementById("response") as HTMLElement
              response_client.textContent = math.getAverage6(numbers).toString()
          } catch (error) {}
      }
  
      useEffect(() => {
          calc()
      },[numbers])
  
      function remove(i : number){
        const arry = numbers
        try {
          arry?.splice(i,1)
          setNumbers(arry)
          setUpd(upd * -1)
          calc()
        } catch (error) {}
      }
  
      function Add(){
        if(!numbers) return
        const input = document.getElementById("number") as HTMLInputElement
        setNumbers([...numbers, parseFloat(input.value)])
        console.log("aaa")
      }
  
    return (
      <div className='jss'>
        <div className='flex flex-col h-64 overflow-y-scroll'>
          {
            numbers?.map((n,i) => (
              <div key={i} className="flex justify-between w-[60%] border-b px-4 border-black">
                <div className=' flex flex-col'>
                  <span className='font-semibold tracking-tighter'>{n}</span>
                </div>
                <button onClick={() => remove(i)} className="group inte-remove interact w-8 h-8 flex
                items-center justify-center">
                  <ImBin2 className='group-hover:fill-red-500 group-hover:scale-110 transition-all pointer-events-none'/>
                </button>
              </div>
            ))
          }
        </div>
  
          <div className='gap-2 flex items-center'>
              <label>Numero: </label>
              <input type="number" className='interact inte-input' id="number"/>
              <button onClick={() => Add()} className="interact p-2 px-4 bg-green-400 rounded-md bg-opacity-75
              hover:bg-opacity-100 transition-all inte-add hover:scale-105 duration-300">
                add
              </button>
          </div>
          <p>O maior numero é: <span id="response"/></p>
      </div>
    )
}

export default Six