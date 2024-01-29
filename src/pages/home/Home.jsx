import { useEffect, useState } from "react";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Header from "../shared/header/Header";
import Navbar from "../shared/nav/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

import NewsAll from "./NewsAll";
import NewsDetails from "../newsDetails/NewsDetails";

const Home = () => {

  const [News, SetNews] = useState([])

  useEffect(() => {
    fetch('news.json')
    .then(res => res.json())
    .then(data => SetNews(data))
      },[])




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

          {
            News.map(news =>
            <NewsAll key={news._id} news={news}></NewsAll>
            
            )
          }
         

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