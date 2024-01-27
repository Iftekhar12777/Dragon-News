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

        <div className="md:col-span-2 mx-auto">

          <div className="card px-5 bg-base-100 shadow-xl">

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

            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>

            </div>
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          </div>

        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;