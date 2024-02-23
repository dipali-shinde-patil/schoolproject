import React from 'react'

const Banner = ({title}) => {
  return (
    <>
    <div className="bg-[url('public/images/backgroundimage.jpg')] py-20">
<h2 className='text-3xl text-primary font-bold text-center'>{title}</h2>

    </div>

        
    

    </>
  )
}

export default Banner