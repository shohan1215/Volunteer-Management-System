import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginLottie from "../../assets/Lottie/LoginLottie.json";
import GoogleLogin from "../../Components/Google Login/GoogleLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin, setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  //   Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        setUser(result?.user);
        toast.success("Login successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) =>
        toast.error("Invalid email or password", {
          position: "top-right",
        })
      );
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] mt-32 mb-10">
      <div className="md:flex  w-full  mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl text-center font-bold text-gray-600 ">
            Welcome back !
          </p>

          <GoogleLogin></GoogleLogin>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase">
              or login with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                required
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between relative">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-lg absolute top-10 right-4"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type={showPassword ? "text" : "password"}
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="btn btn-accent text-lg text-white w-full"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500">Don't have account? </p>
            <Link to="/register">
              <p className="font-bold text-blue-500 hover:underline uppercase">
                Register
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <Lottie animationData={loginLottie}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
