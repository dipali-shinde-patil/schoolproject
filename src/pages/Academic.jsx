import React from 'react'
import Banner from '../components/Banner'
import { useState } from 'react'
import Compo1 from '../components/Compo1'
import Compo2 from '../components/Compo2'
import Compo3 from '../components/Compo3'

const Academic = () => {
const [change, setchange] = useState("one")

  return (
    <div  className=' m-auto'>

<Banner title="Academic"/>

<div className='w-11/12 m-auto grid grid-cols-3 mt-9' >
  <div className={`${ change === "one" ? "bg-blue-700 text-white" : "bg-slate-400 " } flex justify-center  text-2xl`} >
    <button onClick={()=>setchange("one")} className='font-bold'>EARLY YEARS PROGRAMME</button>
  </div>

  <div className={`${ change === "two" ? "bg-blue-700 text-white" : "bg-slate-400"} flex justify-center  text-2xl`} >
    <button onClick={()=>setchange("two")} className='font-bold'>THE FOUNDATION YEAR PROGRAMME</button>
  </div>

  <div className={`${ change === "three" ? "bg-blue-700 text-white" : "bg-slate-400"} flex justify-center  text-2xl`} >
    <button onClick={()=>setchange("three")} className='font-bold'>GROWING YEARS PROGRAMME</button>
  </div>
</div>

<div className='w-11/12 m-auto p-3'>

{change === "one" && <Compo1/>}
{change === "two" && <Compo2/>}
{change === "three" && <Compo3/>}

</div>

        
    </div>
  )
}

export default Academic