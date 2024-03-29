import React, {useEffect, useState} from "react";
import HeroSlide from "./HeroSlide";

const Home = () => {

    const URL =  "https://mocki.io/v1/0bc7cf41-e117-4b7b-bb7b-239c1fbe5bd5";
    const [appData, setAppData] = useState([])
    const [bannerData, setBannerData] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    

    const fetchData = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setAppData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        const slideData = extractBannerData(appData);
        setBannerData(slideData);
    }, [appData]);
    

    const extractBannerData = (json) => {
        return json?.banner
    }


    return (
        <section className="hero_slider">
            <HeroSlide heroData={bannerData} />
        </section>
    );
};

export default Home;
