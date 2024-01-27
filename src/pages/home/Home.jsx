import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Header from "../shared/header/Header";
import Navbar from "../shared/nav/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      

      <div className="mt-40 grid grid-cols-1 lg:grid-cols-4">
           <div>
                  <LeftSideNav></LeftSideNav>
           </div>

           <div className="md:col-span-2">
                <h2>Coming soon!</h2>
           </div>

           <div>
               <RightSideNav></RightSideNav>
           </div>
      </div>
    </div>
  );
};

export default Home;