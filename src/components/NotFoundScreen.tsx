import logo from '../../public/imgs/langlore.png'
import { Link } from 'react-router-dom';

const NotFoundScreen: React.FC = () => {
  

  return (
    <div className='backgroun w-screen h-screen py-20 px-28 flex flex-col items-center'>
      
      <img src={logo} alt="Logo" className="h-[2rem] w-auto" />

      <div className="w-screen h-[100vh] font-bold flex flex-col text-center justify-center items-center capitalize tracking-widest text-white">

        <h1 className="text-[128px] tracking-widest max-md:text-[80px]">404</h1>
        <h1 className="text-[32px] tracking-wider max-md:text-mdheading">Oops! It looks like you’re lost.</h1>

        <Link to="/" className="buttongradient mt-8 px-8 py-4 rounded-[16px] hover:shadow-inner text-[1.5rem] tracking-widest text-white hover:text-pri max-md:text-mdbutton"
        >
          Take me home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
