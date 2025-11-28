import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import NoData from "../../Components/No Data/NoData";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { motion } from "motion/react";
import Space from "../../Components/Space/Space";

const ManageMyPost = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [toogle, setToggle] = useState(true);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [myPost, setMyPost] = useState([]);
  const [myReq, setMyReq] = useState([]);
  const handleToggle = () => {
    setActiveTab("Tab2");
    setToggle(false);
  };
  useEffect(() => {
    if (activeTab == "Tab1") {
      axiosSecure.get(`/my-post?email=${user?.email}`).then((res) => {
        setMyPost(res?.data);
      });
    } else if (activeTab == "Tab2") {
      axiosSecure.get(`/my-request?email=${user?.email}`).then((res) => {
        setMyReq(res.data);
      });
    }
  }, [activeTab]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-post/${id}`).then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success",
            });
          }
          const remain = myPost.filter((post) => post._id != id);
          setMyPost(remain);
        });
      }
    });
  };

  const handleCancle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cancle-request/${id}`).then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success",
            });
            const remain = myReq.filter((post) => post._id != id);
            setMyReq(remain);
          }
        });
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Manage My Post</title>
      </Helmet>
      <div role="tablist" className="tabs tabs-lifted mt-32 ">
        <input
          type="radio"
          name="my_tabs_2"
          onClick={() => setToggle(true)}
          role="tab"
          className={`tab lg:text-2xl font-semibold  ${
            toogle ? "text-accent" : "text-gray-600"
          }`}
          aria-label="My Posts"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1 className="text-xl lg:text-4xl text-center mt-2 font-bold text-accent">
            My Volunteer Need Post ({myPost.length})
          </h1>
          {myPost.length == 0 ? (
            <NoData text={"No Volunteer Need Post is Found"}></NoData>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="overflow-x-auto mt-7"
            >
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-lg">
                    <th></th>
                    <th>Title</th>
                    <th>Volunteer Need</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myPost.map((post, index) => (
                    <tr className="text-gray-400 font-semibold">
                      <th>{index + 1}</th>
                      <td>{post.title}</td>
                      <td>{post.numberOfVolunteer}</td>
                      <td>{post.location}</td>
                      <td className="flex  items-center gap-5 text-xl ">
                        {" "}
                        <Link
                          to={`/update-post/${post._id}`}
                          className="text-blue-500 cursor-pointer"
                        >
                          <FaEdit />
                        </Link>{" "}
                        <Link
                          onClick={() => handleDelete(post._id)}
                          className="text-red-400 cursor-pointer"
                        >
                          <MdDelete />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          onClick={() => handleToggle()}
          className={`tab lg:text-2xl font-semibold  ${
            toogle ? "text-gray-600" : "text-accent"
          }`}
          aria-label="My Request"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1 className="text-xl lg:text-4xl text-center mt-2 font-bold text-accent">
            My Volunteer Request ({myReq.length})
          </h1>
          {myReq.length == 0 ? (
            <NoData text={"No Request is Found"}></NoData>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="overflow-x-auto mt-7"
            >
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-lg">
                    <th></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Organizer</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myReq.map((Req, index) => (
                    <tr key={Req._id} className="text-gray-400 font-semibold">
                      <th>{index + 1}</th>
                      <td>{Req.title}</td>
                      <td>{Req.description.slice(0, 50)} . . .</td>
                      <td>{Req.organizer.name}</td>
                      <td>{Req.location}</td>
                      <td className="text-2xl text-red-400 ">
                        <span
                          onClick={() => handleCancle(Req._id)}
                          className="cursor-pointer"
                        >
                          <TiCancel />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </div>
      <Space></Space>
    </>
  );
};

export default ManageMyPost;
