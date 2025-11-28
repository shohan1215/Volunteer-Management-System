import { Link, useNavigate } from "react-router-dom";
import ErrorLottie from "../../assets/Lottie/ErrorLottie.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white">
      <div className="min-h-screen md:flex items-center justify-center  p-10 space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2 mx-auto ">
          <Lottie animationData={ErrorLottie}></Lottie>
        </div>
        <div className=" w-full md:w-1/2 mx-auto text-center">
          <p className="text-accent text-6xl font-bold">404</p>
          <h1 className="mt-3 text-xl  text-accent font-bold  dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesnt exist. Here are some link
            :
          </p>

          <div className="flex items-center justify-center mt-6 gap-x-3">
            <button className="btn btn-accent text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span onClick={() => navigate(-1)}>Go back</span>
            </button>

            <Link to="/" className="btn btn-accent text-white ">
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
