import React from "react";
import Banner from "../components/Banner";

const Admission = () => {
  return (
    <div className=" m-auto">
      <Banner title="Admission" />

      <div className=" justify-center align-middle">
  
        <h1 className="text-center font-bold text-4xl p-10 text-blue-900">School Virtual Tour</h1>
      <div className="flex justify-center p-4"><iframe width="1000" height="500" src="https://www.youtube.com/embed/cuIFuOVG9eA?si=pmq1O7OB9swT1gCm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

      <div className="sm:p-10 p-3 sm:ml-96 sm:mr-96">
        <div className="bg-slate-600 py-15 rounded-md text-[#e5e7eb] text-sm sm:text-base font-semibold">
          <div className="flex justify-center text-center  sm:w-[]700px] sm:px-3 ">
            <form action="">
              <h1 className="font-bold  text-start sm:text-3xl text-xl text-white">
                Please fill the Form below to Place Admission Enquiry
              </h1>

              <div className="sm:w-90  sm:my-4  ">
                <input
                  className="sm:w-[480px] w-full text-start h-12  bg-slate-600 border-b-2  font-bold sm:text-xl"
                  type="text"
                  placeholder="Name Of Student"
                />
              </div>
                                    
              <div className="sm:w-80 sm:my-4">
                <input
                  className="sm:w-[480px] w-full text-start h-12  bg-slate-600 border-b-2  font-bold sm:text-xl"
                  type="text"
                  placeholder="Adimission Required For Which Grade?"
                />
              </div>

              <div className="sm:w-80  sm:my-4">
                <input
                  className="sm:sm:w-[480px] w-full text-start h-12  bg-slate-600 border-b-2  font-bold sm:text-xl"
                  type="text"
                  placeholder="Parant Name"
                />
              </div>

              <div className="sm:w-80 sm:my-4">
                <input
                  className="sm:w-[480px] w-full text-start h-12  bg-slate-600  border-b-2 font-bold sm:text-xl"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>

              <div className=" sm:w-80 sm:my-4">
                <input
                  className="sm:w-[480px] w-full text-start h-12  bg-slate-600 border-b-2 font-bold sm:text-xl"
                  type="email"
                  placeholder="Email ID"
                />
              </div>

              <div className="sm:w-80 sm:my-4">
                <input
                  className="sm:w-[480px] w-full  text-start h-12  bg-slate-600 border-b-2  font-bold sm:text-xl"
                  type="text"
                  placeholder="Residential Address"
                />
              </div>

              <div className="p-4 my-2 text-center">
              <button
                type="submit"
                className="px-6 py-1 border-2 rounded-full text-white hover:bg-white hover:text-black bg-red-600"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Admission;
