import React, { useState } from 'react'


const FormContact = () => {
    const[Form, setForm]=useState({Fname:" ", Lname:" ", Email:" ", Phone:" "});
const changeForm=()=>{
    changeForm({...Form,[e.target.name]:e.target.value})
}

const formsubmit =(e)=>{
    e.preventDefault;
  
}
  return (
    <div>
    <form onSubmit={formsubmit}>
    
        <input className="sm:w-[480px] w-full text-center h-24  bg-primary border-b-2  font-bold sm:text-xl " type='text' placeholder=' Send Message' name='Lname' onChange={changeForm} value={Form.l}/><br></br>

        <input className="sm:w-[480px] w-full text-center h-24 bg-primary border-b-2  font-bold sm:text-xl " type='text' placeholder='Name' name='Fname' onChange={changeForm} value={Form.F}/><br></br>
        <input className="sm:w-[480px] w-full text-center h-24 bg-primary border-b-2  font-bold sm:text-xl " type='text' placeholder=' Mobile Number' name='Lname' onChange={changeForm} value={Form.l}/><br></br>
        <input className="sm:w-[480px] w-full text-center h-24  bg-primary border-b-2  font-bold sm:text-xl " type='text' placeholder=' Email' name='Email' onChange={changeForm} value={Form.E}/><br></br>
        <input className="sm:w-[480px] w-full text-center h-24  bg-primary border-b-2  font-bold sm:text-xl " type='text' placeholder='Enter Phone' name='Phone' onChange={changeForm} value={Form.P}/><br></br>


   <div className=" flex justify-center"> <button className=" px-6 py-1 border-2 rounded-full text-white hover:bg-white hover:text-black bg-red-600" type="submit" >Submit</button></div>
    </form>
    </div>
  )
}

export default FormContact