import React from "react";
import LoginModal from "./login.module";
import SignUpModal from "./signup.module";

const NavBar = () => {
    return(
        <>
             {/*navbar  */}
        <div className="hidden sm:flex flex justify-between items-center gap-12 p-2 pr-10 pl-10 text-gray-500 text-xs">         {/* this div appearin top left side of the page  */}
          <div className="flex gap-5">
            <p>Free Shipping</p>
            <p>Click & Collect</p>
            <p>Home Delivery</p>
          </div>
          <div className="col-span-4 flex flex-rows gap-5">  {/* this div appear in top left side of the page  */}
            <p>Deliver to 
              <select name="address" id="" className="text-blue-500">
                <option value="">...Select Area...</option>
                <option value="">Kathmandu</option>
                <option value="">Pokhera</option>
                <option value="">Biratnagar</option>
              </select>
            </p>
            <p>Shop more brands</p>
            <p>Sell With US</p>
          </div>
        </div>
          <hr/>
          {/* second navbar */}
        <div className="navbar sticky top-0 bg-white shadow-md z-50">
                  {/* Navigation Bar */}
      {/* <div className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50"> */}
          <div className="flex justify-between items-center gap-5 p-2 pr-10 pl-1 text-sm md:p-5">
            {/* Left Side: Logo */}
            <div className="flex items-center">
              <img src="/pic/logo.jpg" alt="logo Loading" width={60}/>
            </div>
            {/* middle: Search Box */}
            <div className="flex-grow md:w-auto">
              <div className="flex items-center border border-gray-300 rounded-md p-2 w-full">
                <input type="text" placeholder="Search..." className="flex-grow outline-none px-2" />
                <button className="text-gray-500 hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zm-7 4a7 7 0 1113.07 4.9l4.3 4.3a1 1 0 11-1.42 1.42l-4.3-4.3A7 7 0 011 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* right: Search Box */}
            <div className="hidden sm:flex col-span-4 flex flex-rows gap-5">  {/* this div appear in top left side of the page  */}
              <LoginModal/>
        
              <p>|</p>
              <SignUpModal/>
              <p>|</p>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> 
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L5 5m0 0H3m4 8l-1.5 6h13l-1.5-6M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="ml-10 flex gap-5 text-base font-bold"> {/* category of itemsfound here */}
              <a className="pt-1 hover:underline" href="/allitem/itemsDetails" >Women</a>
              <p className="pt-1">|</p>
              <a className="pt-1 hover:underline" href="/allitem/itemsDetails">Baby</a>
            </div>
          </div>
        </div>
        </>
    )
}


export default NavBar;