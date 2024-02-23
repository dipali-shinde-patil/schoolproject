import React from 'react'
import { Link } from "react-router-dom";

const navdata = [
  { title: 'Home', linkto: '' },
  { title: 'About Us', linkto: '/about' },
  { title: 'Admission', linkto: '/admission' },
  { title: 'MandatoryPublicDisclosure', linkto: '/mandatorypublicdisclosure' },
  { title: 'Achievment', linkto: '/achievment' },
  { title: 'Infrastucture', linkto: '/infrastucture' },
  { title: 'Gallery', linkto: '/gallery' },
  { title: 'Contact Us', linkto: '/contactus' },
  { title: 'Academic', linkto: '/academic' },
];

const Footer = () => {
  return (
    <div className='bg-slate-300'>
      
<div className='py-3 px-3 flex flex-col gap-4 w-11/12 m-auto  sm:grid grid-cols-3'>
  <div><h2 className='text-secondary font-bold text-xl   '>School Address</h2>
  <h3 className='text-2xl text-primary py-3 '>Bhondawe Patil Public School</h3>
  <p className='text-primary leading-7'>Gut No. 49, Bajaj Nagar,MIDC,<br/>
Waluj, Aurangabad – 431136. (MH).<br/>

Contact: 6232616161/ 6232717171<br/>

Email: bhondawepatilschool@gmail.com</p>
  
  </div>
  <div>
    <h2 className='text-secondary font-bold text-xl  '>Quick Links Address</h2>

    <ul className=" flex gap-y-2 flex-col gap-">
            {navdata.map((item, index) => (
              <Link key={index} to={item.linkto}>
                <li className='hover:text-red-700 '>{item.title}</li>
              </Link>
            ))}
          </ul>
  <div></div>
  
  </div>


  <div>
    <h2 className='text-secondary font-bold text-xl  '> Follow Us on</h2>
  <div className='flex gap-3 mt-3'>


  <img  className='w-12 h-12 hover:scale-110' src='./images/facebook.logo.webp' alt=''/>
  <img  className='w-12 h-12 hover:scale-110' src='./images/instagram.logo.webp' alt=''/>
  <img  className='w-12 h-12 hover:scale-110' src='./images/youtube.logo.webp' alt=''/>

  </div>
  
  
  </div>
  
</div>

<div className=' text-xs  sm:mt-2 text-white sm:text-sm w-full m-auto bg-secondary py-1 px-1 text-center'><p>All Rights Reserved With Bhondawe Patil Public School</p></div>

    </div>
  )
}

export default Footer