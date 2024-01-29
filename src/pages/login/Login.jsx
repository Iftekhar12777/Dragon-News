import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/nav/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../fireBase/provider/AuthProvider";


const Login = () => {
  const location = useLocation()
  console.log(location)

  const navigate = useNavigate()

  const {signIn} = useContext(AuthContext)

    const handleLogin = e =>{
      e.preventDefault()
      const form = new FormData (e.currentTarget)
      console.log(e.currentTarget)
      const email = form.get('email')
      const password = form.get('password')

      signIn(email, password)
      .then(result => {
        console.log(result.user)
        navigate(location?.state ? location.state : '/')
      } )

      .catch(error => {
        console.error(error)
      })
    }


  return (
    <div>
      <Navbar></Navbar>

      <div>
        <h1 className="text-center font-bold text-4xl mt-10">Please login</h1>

        <form onSubmit={handleLogin} className="card-body md:h-3/4 lg:w-1/2 mx-auto">
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

          <p className="text-center">Do not have an account? Please <Link to='/signUp' className="font-bold text-violet-500">Register</Link></p>

      </div>

    </div>
  );
};

export default Login;