import { useState } from "react";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Header from "../shared/header/Header";
import Navbar from "../shared/nav/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoEyeSharp } from "react-icons/io5";

const Home = () => {

  const originalText =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eos, delectus, vel autem inventore numquam ab quisquam sed, culpa ipsum minima aut excepturi dolor eaque corrupti vitae. Tenetur, accusantium eligendi.';

  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  // Determine whether to show full text or a preview based on the state
  const displayText = showFullText ? originalText : `${originalText.slice(0, 150)}...`;



  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>


      <div className="mt-40 grid grid-cols-1 lg:grid-cols-4 gap-2">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        {/* middle section */}
        <div className="md:col-span-2 mx-auto border">

          <div className=" px-5 bg-base-100 shadow-xl">

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
              <h2 className="card-title">Shoes!</h2>

            </div>
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

            <div className="border-b">
              <p className="mt-1">{displayText}</p>
              {originalText.length > 150 && (
                <a className=" text-pink-600 font-medium" href="#read-more" onClick={handleReadMoreClick}>
                  {showFullText ? 'Read Less' : 'Read More'}
                </a>)}
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

        <div>
          <RightSideNav></RightSideNav>
        </div>


      </div>
      {/* end */}
    </div>
  );
};

export default Home;