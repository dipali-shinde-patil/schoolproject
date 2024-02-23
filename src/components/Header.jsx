// Header.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";



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

const Header = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="w-full">
      <div className="bg-secondary text-white">
        <div className=" w-full px-3 sm:w-11/12 py-0 mx-auto flex justify-between">
          <p>bhondawepatilschool@gmail.com</p>
          <p>facebook</p>
        </div>
      </div>
    


      <div className="  w-full sm:w-11/12 mx-auto px-2 py-3 flex justify-between items-center">
        <img src=""></img>
        <div onClick={()=>{
          setopen(!open)
        }} className=" text-primary block sm:hidden">
          {open? <CgClose />:<FaBars />}
          
          
          </div>
        
      </div>

      <div className="bg-blue-900 text-white">
        <nav className="w-11/12 mx-auto">
          <ul className={`flex flex-col sm:flex-row  gap-7 px-3 py-2   ${open?"block":"hidden sm:flex"}`}>
            {navdata.map((item, index) => (
              <Link key={index} to={item.linkto}>
                <li onClick={()=>setopen(!open)} >{item.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
