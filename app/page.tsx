import React from "react";
import AutoCarousel from "./components/carousel.module";
import ClothList from "./components/clothlist.module";
import NavBar from "./components/navbar.module";
import SideBar from "./components/sidebar.module";
import Footer from "./components/footer.module";

export default function Home() {
  return (
    <div>
       <NavBar/>
      {/* body content */}
      <div className="grid grid-cols-7 gap-2"> {/*body column */}
        <div className="col-span-2">
          <SideBar/>
        </div>
        <div className="col-span-5">
          <AutoCarousel/>
          <ClothList/>
        </div>
      </div>
      <Footer/>
    </div>

  );
}
