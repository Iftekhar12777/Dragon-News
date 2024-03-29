import { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import NewsDetails from "../newsDetails/NewsDetails";


const NewsAll = ({ news }) => {

  const {details, _id}=news





  return (
    <div>
      <div className=" p-4 bg-base-100 shadow-xl">

        <section className="flex justify-between items-center bg-gray-200 p-2">

          <div className="flex gap-2 items-center">

            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>

            </div>

            <div>
              <h3>Awlad Hossain</h3>
              <p>3-4-2024</p>
            </div>

          </div>

          <div className="flex gap-1">
            <CiBookmark className="text-2xl font-semibold"></CiBookmark>
            <CiShare2 className="text-2xl font-semibold"></CiShare2>
          </div>


        </section>

        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>

        </div>
        <figure><img src={news.author.img} alt="Shoes" /></figure>

        <div className="border-b">
          {
            details.length > 150 ? <p>{details.slice(0,150)} <Link   to={`/news/${_id}`} className="text-violet-500 font-bold"> Read More...</Link></p> : <p>{details}</p>
          }
        </div>

        

        {/* Ratings and view */}
        <div >

          <div className="flex justify-between mt-2 items-center p-1 ">

            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>

            <div>
              <IoEyeSharp></IoEyeSharp>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsAll;