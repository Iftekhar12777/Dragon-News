import { useParams } from "react-router-dom";
import Navbar from "../shared/nav/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";


const NewsDetails = () => {
const {id, title } = useParams()

  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-4 mt-10">
         
        <div className="col-span-3">
        <h1>News Details id: {id}</h1>
        <h1>{title}</h1>
       
        </div>

         <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default NewsDetails;