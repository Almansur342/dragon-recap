import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const {updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate()
  
  const handleUpdate=(e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    console.log(name,photo);
    updateUserProfile(name,photo)
    .then(result =>{
      console.log('profile updated');
      navigate('/')

    })
    .catch(error =>{
      console.error('error occured');
    })
  }
  
  return (
    <div className="mb-20">
    <form onSubmit={handleUpdate} className="w-2/5 mx-auto border-2 p-3">
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
        <button className="w-full bg-green-600 p-3 mt-5 text-white font-bold text-lg">Update Profile</button>
        </div>
        
      </form>
  </div>
  );
};

export default Update;