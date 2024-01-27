import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>

      <div className="p-4">
            <h2 className="text-2xl font-bold mb-3 ">Login with</h2>
            <button className="btn btn-outline w-full">
            <AiFillGoogleCircle />
            Google
            </button>
            <button className="btn btn-outline w-full mt-2">
            <FaGithub />
            Github
            </button>

      </div>

      <div className="p-4">
            <h2 className="text-2xl font-bold mb-3">Find us on</h2>
            <a className="flex items-center gap-3 border p-2 rounded-t-lg" href="">
              <div className="text-2xl"><FaFacebook></FaFacebook></div>

              <span className="text-2xl">Facebook</span>
            </a>
            <a className="flex items-center gap-3 border-x p-2 " href="">
              <div className="text-2xl"><FaTwitter></FaTwitter></div>

              <span className="text-2xl">Twitter</span>
            </a>
            <a className="flex items-center gap-3 border p-2 rounded-b-lg" href="">
              <div className="text-2xl"><FaInstagram></FaInstagram></div>

              <span className="text-2xl">Instagram</span>
            </a>

      </div>

      <div className="p-4">
            <h2 className="text-2xl font-bold mb-3">Q-Zone</h2>
            <AwesomeSlider>
                    <div><img src={qZone1} alt="" /></div>
                    <div><img src={qZone2} alt="" /></div>
                    <div><img src={qZone3} alt="" /></div>
                    
            </AwesomeSlider>

      </div>

    </div>
  );
};

export default RightSideNav;