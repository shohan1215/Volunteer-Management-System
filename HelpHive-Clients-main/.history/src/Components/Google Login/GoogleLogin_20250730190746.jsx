import React from "react";
import useAuth from "../../Hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
  prompt: "select_account"
});

  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
          uid: result.user.uid,
          role: "user", 
  };

fetch("http://localhost:5000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(userInfo)
})
.then(res => res.json())
.then(data => {
  console.log("User info saved to MongoDB:", data);
});

        toast.success("Successfully login with Google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Something went wrong !!");
      });
  };
  return (
    <div>
      <div
        onClick={handleGoogleSignIn}
        className="flex cursor-pointer items-center justify-center mt-4 text-gray-600  border rounded-lg   hover:bg-gray-200 "
      >
        <div className="px-4 py-2 text-2xl">
          <FcGoogle />
        </div>

        <span className="w-5/6 px-4 py-3 font-bold text-center">
          Sign in with Google
        </span>
      </div>
    </div>
  );
};

export default GoogleLogin;
