import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div>
        <div className='flex justify-center'>
              <img src={logo} alt="" />
        </div>

        <p className='text-center mt-3 text-md'>Journalism Without Fear or Favour</p>

        <div className='flex justify-center'>
            <p className='text-center mt-3 border text-xl w-[400px]'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    </div>
  );
};

export default Header;