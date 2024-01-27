import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
  const [Categories, SetCategories] = useState([])

  useEffect(() => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => SetCategories(data))
  },[])

  return (
    <div className="border p-4">
      <h2 className="text-3xl font-bold mb-3">All Categories</h2>

    <div>
          {
            Categories.map(category => <NavLink className='block text-2xl font-medium mb-2' key={category.id}>{category.name}</NavLink>)
          }
    </div>

    </div>
  );
};

export default LeftSideNav;