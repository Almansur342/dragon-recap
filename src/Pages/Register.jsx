import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link,useLocation,useNavigate} from "react-router-dom";


const Register = () => {
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  const handleRegister = (e) =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name,email,photo,password);

    createUser(email,password)
    .then(result =>{
      updateUserProfile(name,photo)
      .then(()=>{
        navigate(location?.state ? location.state : '/')
      })
     
    })
    .catch(error =>{
      console.error(error);
    })
  }
  return (
    <div>
      <form onSubmit={handleRegister} className="w-2/5 mx-auto border-2 p-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
          </div>
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
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
    </div>
        
  );
};

export default Register;