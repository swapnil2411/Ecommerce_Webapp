import React, { useEffect, useState } from "react";

const Products = () => {
    const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const currUrl = window.location.href.split("/");
    const categoryId = currUrl[currUrl.length - 1]
    fetchCategoryData(categoryId)
    // const categoryId = new URLSearchParams(currUrl);
    // console.log(categoryId)
    // if (categoryId) {
    //   fetchCategoryData(categoryId);
    // }
  }, []);

  const fetchCategoryData = async (categoryId) => {
    try {
      const catUrl = `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`;
      const categoryResponse = await fetch(catUrl);
      const catData = await categoryResponse.json();
      setCategoryData(catData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
    console.log(categoryData)

  return (
    <div>
      <h2>Products</h2>
      {categoryData && categoryData.map(el => 
        <div>
          {/* Display category data here */}
          <p>Category ID: {el?.id}</p>
          <p>Category Name: {el?.title}</p>
          {/* Render other category data as needed */}
        </div>
      )}
    </div>
  );
}

export default Products;