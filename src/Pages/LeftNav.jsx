import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error.message));
  }, []);
  return (
    <div className="mt-4">
      <h4>All Caregory</h4>
      <button className="btn btn-secondary mt-2">National News</button>
      <div className=" mt-4">
        {categories?.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none text-secondary ms-4"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
