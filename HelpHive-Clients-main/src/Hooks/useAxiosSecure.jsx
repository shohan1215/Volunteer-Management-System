import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API}`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userLogOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          userLogOut()
            .then((res) => {
             
              navigate("/login");
            })
            .catch((err) => {
              toast.error(err?.message);
            });
            toast.error(error?.response?.data?.message);
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxiosSecure;
