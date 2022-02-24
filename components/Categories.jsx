import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div
      className="shadow-lg rounded-lg p-8 pb-12 mb-8 text-white "
      style={{
        background: "rgb(179,48,48)",
        background:
          "linear-gradient(165deg, rgba(179,48,48,1) 0%, rgba(0,0,0,1) 100%)",
      }}
    >
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;