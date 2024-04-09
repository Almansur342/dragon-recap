import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link,useLocation,useNavigate} from "react-router-dom";

const Login = () => {
  const { signIn,googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  console.log('location in login page', location);

  const handleSignIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email,password)
    .then(result =>{
      // console.log(result.user);
      // navigate after login
      navigate(location?.state ? location.state : '/')
    })


    .catch(error =>{
      console.error(error);
    })
  }

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result => {
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
  
    })
  
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div>
      <form onSubmit={handleSignIn} className="w-2/5 mx-auto border-2 p-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <p>New here? please <Link to='/register'>Register</Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleGoogleLogin} className="px-6 font-semibold text-xl text-white bg-red-400 py-1">Google Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;