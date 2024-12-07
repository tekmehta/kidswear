import Carousel from "@/app/components/carousel.module";
import ClothList from "@/app/components/clothlist.module";
import Footer from "@/app/components/footer.module";
import NavBar from "@/app/components/navbar.module";
import React from "react";

const Womencloth = () => {
    return(
        <div>
            <NavBar/>
            <ClothList/>
            <Footer/>
        </div>
    )
}

export default Womencloth;