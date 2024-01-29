import { Link } from "react-router-dom";
import Navbar from "../shared/nav/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../fireBase/provider/AuthProvider";


const SignUp = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    console.log(e.currentTarget)

    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')

    // create user

    createUser(name, photo, email, password)
    .then(result => {console.log(result.user)})
    .catch(error=>{console.error(error)})

  }

  return (
    <div>
      <Navbar></Navbar>

      <div>
        <h1 className="text-center font-bold text-4xl mt-10">Please Register your account</h1>

        <form onSubmit={handleRegister} className="card-body md:h-3/4 lg:w-1/2 mx-auto">

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="text" name="photo" placeholder="Your photo url" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <p className="text-center">Already have an account? Please <Link to='/login' className="font-bold text-violet-500">Login</Link></p>

      </div>
    </div>
  );
};

export default SignUp;