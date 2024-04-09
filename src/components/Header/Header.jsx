import moment from 'moment';
import Marquee from "react-fast-marquee";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='text-center space-y-4 mb-7'>
      <img className='mx-auto' src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM, Do YYYY")}</p>
      <div className='flex items-center'>
        <button className='px-6 rounded py-2 border bg-[#D72050]'>latest</button>
        <Marquee pauseOnHover={true} speed={100}>
         <Link to='/' className='mr-10'> The activist was placed on a bus with fellow detainees and driven away from a protest at The Hague</Link>
         <Link to='/' className='mr-10'> While some were startled, for many, it was just one more disturbance in a city thats no stranger to chaos</Link>
         <Link to='/' > The activist was placed on a bus with fellow detainees and driven away from a protest at The Hague1.</Link>
         <Link to='/'> “All the work you could want, but there isn’t anywhere to live,” say those struggling on the island1.</Link>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;