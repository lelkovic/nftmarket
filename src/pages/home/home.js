import React from "react";
import TitleBlock from "../../components/TitleBlock";
import ContactUS from "../../components/ConactUs";
//import FeaturedBlock from "../../components/FeaturedBlock";
import FeaturedSlider from "../../components/FeaturedSlider";

export const HomePage = () => {
    return (
        <>
            <TitleBlock></TitleBlock>
            <FeaturedSlider></FeaturedSlider>
            <ContactUS></ContactUS>
        </>
    );
};
