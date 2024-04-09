import { useContext } from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () =>{
    logOut()
    .then(result => {
      console.log(result.user);
      navigate('/');
    })
    .catch(error =>{
      console.error(error);
    })
  }



  const navLink = <>
    <li><NavLink to='/' className={({ isActive }) => isActive ? 'border border-green-600 text-[#23BE0A] ' : 'text-[#131313CC]'}>Home</NavLink></li>

    <li><NavLink to='/contactUs' className={({ isActive }) => isActive ? 'border border-green-600 text-[#23BE0A] ' : 'text-[#131313CC]'}>Contact Us</NavLink></li>

    <li><NavLink to='/updateProfile' className={({ isActive }) => isActive ? 'border border-green-600 text-[#23BE0A] ' : 'text-[#131313CC]'}>Update Profile</NavLink></li>

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {user? <div>
          <img className="w-20 h-16 rounded-full border-2" src={user?.photoURL || 'image nai'} alt="" />
          <p>{user?.displayName || 'mansur abdullah'}</p>
          <Link to='/'>
          <button onClick={handleLogOut} className="px-6 font-semibold text-xl text-white bg-[#403F3F] py-1">Sign out</button>
        </Link> 
        </div> : <div>
        <Link to='/login'>
          <button className="px-6 font-semibold text-xl text-white bg-[#403F3F] py-1">Login</button>
        </Link>
        </div>      
  }
       
      </div>
    </div>
  );
};

export default Navbar;