import React, { useEffect, useState } from 'react'

function One() {
    const [number, setNumber] = useState<number>()

    const calc = () => {
        try {
            const response_client = document.getElementById("response") as HTMLElement
            if(!number){
                response_client.textContent = "numero inexistente"
                return
            }
            const resp = number % 2 == 0 ? "o numero é par" : "o numero é impar"
            response_client.textContent = resp.toString();
        } catch (error) {}
    }

    useEffect(() => {
        calc()
    },[number])

  return (
    <div className='jss'>
        <div>
            <label>Numero: </label>
            <input type={"number"} onChange={(e) => setNumber( parseFloat(e.target.value) )} className={"interact inte-input"}/>
        </div>
        <p><span id="response"/></p>
    </div>
  )
}

export default One