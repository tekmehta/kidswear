import React from "react";

const Footer = () => {
    return(
        <>
            <footer className="mt-12 bg-cyan-50">
            {/* this section is about sub category */}
                <div className="flex justify-between flex-wrap gap-12 p-5"> {/* footer for catagory of items */}
                <div className="">
                    <p className="font-bold text-emerald-600"> Womens Fashion</p>
                    <a href="#" className=" text-blue-400 hover:underline">Women Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Plus Size Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Maternity Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Shoes</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Beauty</a><br/>
                </div> 
                <div className="">
                    <p className="font-bold text-emerald-600"> Womens Fashion</p><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Women Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Plus Size Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Maternity Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Shoes</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Beauty</a><br/>
                </div> 
                <div className="">
                    <p className="font-bold text-emerald-600"> Womens Fashion</p><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Women Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Plus Size Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Maternity Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Shoes</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Beauty</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Bags & Luggage</a><br/>
                </div> 
                <div className="">
                    <p className="font-bold text-emerald-600"> Womens Fashion</p><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Women Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Plus Size Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Maternity Clothing</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Shoes</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Beauty</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Bags & Luggage</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Travel & Luggage</a><br/>
                    <a href="#" className=" text-blue-400 hover:underline">Fashion Accessories</a><br/>
                </div> 
                </div>
                <hr/>
                {/* this is contact social media link section */}
                <div className="grid grid-cols-6 p-10 m-2 text-base">
                    <div className="col-span-3 ">
                        <div className="flex flex-row gap-3 flex-wrap mb-2">
                            <div>
                                <p className="border-[5px] p-1 rounded-[50%]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}>
                                        <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5a2 2 0 012-2h2a2 2 0 012 2v.44a2 2 0 01-.72 1.53l-1.1.92a16.45 16.45 0 006.36 6.36l.92-1.1a2 2 0 011.53-.72H17a2 2 0 012 2v2a2 2 0 01-2 2h-1c-5.523 0-10-4.477-10-10V5z"/>
                                    </svg>
                                </p>
                            </div>
                            <div>
                                <p className="text-emerald-600">Call to us</p>
                                <a href="tel:+9779824765952"  className=" text-blue-400 hover:underline">+9779824765952</a>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 flex-wrap mb-2">
                            <div>
                                <p className="border-[5px] p-2 rounded-[50%]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.5 4.5a1 1 0 001 0L21 8M3 8V6a2 2 0 012-2h14a2 2 0 012 2v2m-18 0v10a2 2 0 002 2h14a2 2 0 002-2V8"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div>
                                <p className="text-emerald-600">Write to us</p>
                                <a className=" text-blue-400 hover:underline" href="https://mail.google.com/mail/?view=cm&fs=1&to=ntek7907@gmail.com" target="_blank">ntek7907@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 flex-wrap mb-2">
                            <div>
                                <p className="border-[5px] p-2 rounded-[50%]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM11 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-3.75a.75.75 0 0 1-.75-.75c0-.598.354-1.055.904-1.349.524-.28 1.096-.432 1.596-.622.543-.207.75-.423.75-.779 0-.659-.548-1.125-1.5-1.125-.812 0-1.263.396-1.435.65a.75.75 0 1 1-1.248-.832c.443-.664 1.287-1.318 2.683-1.318 1.63 0 3 1.044 3 2.625 0 1.256-.842 1.89-1.692 2.207-.462.176-.973.31-1.308.482-.33.17-.428.34-.428.555a.75.75 0 0 1-.75.75Z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </p>
                            </div>
                            <div>
                                <p className="text-emerald-600">Help Centre</p>
                                <a className=" text-blue-400 hover:underline" href="https://mail.google.com/mail/?view=cm&fs=1&to=ntek7907@gmail.com&body=THIS%20IS%20HELP%20CENTER.%0AHow%20can%20we%20help%20you?%0AYourMessage" target="_blank">ntek7907@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="flex flex-row gap-3 flex-wrap mt-10 ml-10 pt-5">
                            <span className="border p-2 rounded-[50%]">
                                <a href="https://www.facebook.com/balenshahfans99" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.674c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.795.144v3.24h-1.918c-1.505 0-1.797.715-1.797 1.763v2.311h3.587l-.467 3.296h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.324V1.325C24 .593 23.406 0 22.675 0z"
                                        />
                                    </svg>
                                </a>
                            </span>
                            <span className="border p-2 rounded-[50%]">
                                <a href="https://www.facebook.com/balenshahfans99" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM17 5.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"/>
                                    </svg>
                                </a>
                            </span>
                            <span className="border p-2 rounded-[50%]">
                                <a href="https://www.facebook.com/balenshahfans99" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path d="M20.447 3H3.553A1.553 1.553 0 0 0 2 4.553v14.894A1.553 1.553 0 0 0 3.553 21h16.894A1.553 1.553 0 0 0 22 19.447V4.553A1.553 1.553 0 0 0 20.447 3ZM8.113 18.338H5.56V9.65h2.553v8.688Zm-1.277-9.874h-.018c-.87 0-1.433-.598-1.433-1.346 0-.762.578-1.346 1.466-1.346.89 0 1.433.584 1.451 1.346 0 .748-.562 1.346-1.466 1.346Zm12.127 9.874h-2.553v-4.708c0-1.183-.423-1.99-1.481-1.99-.808 0-1.289.544-1.501 1.071-.078.19-.098.453-.098.717v4.91h-2.553s.034-7.965 0-8.688h2.553v1.23c.34-.524.949-1.27 2.309-1.27 1.682 0 2.946 1.11 2.946 3.496v5.232Z"/>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <hr/>
            </footer>
                {/* this section is about policy */}
                <div className="flex justify-between items-center flex-wrap gap-12 p-2 pr-10 pl-12 text-stone-50 bg-stone-950 text-xs ">         {/* this div appearin bottom left side of the page  */}
                    <div className="flex gap-10">
                        <div className="flex items-center ">
                        <img className="rounded-[60%]" src="/pic/logo.jpg" alt="logo Loading" width={80}/>

                        </div>
                        <p>
                        <a href="#">2024 RetalWorld FZE</a><br />
                        <a href="#">Terms & Conditions</a>
                        <a href="#"> - </a>
                        <a href="#">Privacy Policy</a>
                        </p>
                    </div>
                    <div className="col-span-4 flex flex-rows gap-5 text-stone-950">  {/* this div appear in bottom lright side of the page  */}
                        <select name="" id="">
                        <option value="">Nepal</option>
                        <option value="">India</option>
                        <option value="">United</option>
                        <option value="">Canada</option>
                        </select>
                    </div>
                    <div>
                        <p>Powered by <a href="#">Kidswea</a></p>
                    </div>
                </div>
        </>
    )
}

export default Footer;