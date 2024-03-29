import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSlide = ({heroData}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // const [categoryData, setCategoryData] = useState([]);

    // useEffect(() => {
    //     console.log(categoryData); // This will log the updated categoryData whenever it changes
    // }, [categoryData]);

    
    // const fetchCategoryData = async (categoryId) => {
    //     try {
    //         const catUrl = `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`;
    //         const categoryResponse = await fetch(catUrl);
    //         const catData = await categoryResponse.json();
    //         setCategoryData(catData);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // }

    const handleCategory = async (categoryId) => {
        console.log("Clicked Category ID is:" + categoryId)
        window.location.href = `/products/${categoryId}`
    }





    return(
      <Slider {...settings}>
        {
            heroData?.map(el => {
                return(
                    <div className="slider" key={el?.id}>
                        <img src={el?.img} alt="" />
                        <div className="slider_container">
                            <div className="banner_content black_color_text">
                                <h2>{el?.info?.title}</h2>
                                <p>{el?.info?.description}</p>
                                <button type="button" onClick={() => handleCategory(el?.id)}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                )
                
            })
        }
      
    </Slider>
    )
}

export default HeroSlide;