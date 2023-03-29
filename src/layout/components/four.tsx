import React, { useEffect, useState } from 'react'
import { Math_ } from '~/utils/classes'

function Four() {
    const [number, setNumber] = useState<number>()
    const math = new Math_()

    const calc = () => {
        try {
            const response_client = document.getElementById("response") as HTMLElement
            if(!number && number != 0){
                response_client.textContent = "insira o numero"
                return
            }
            response_client.textContent = math.getTypeNumber4(number)
        } catch (error) {}
    }

    useEffect(() => {
        calc()
    },[number])

  return (
    <div className='jss'>
        <div>
            <label>idade: </label>
            <input type={"number"} onChange={(e) => setNumber( parseFloat(e.target.value) )} className={"interact inte-input"}/>
        </div>
        <p><span id="response"/></p>
    </div>
  )
}

export default Four