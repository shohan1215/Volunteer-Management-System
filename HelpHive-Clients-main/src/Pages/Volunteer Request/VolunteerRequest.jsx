import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const VolunteerRequest = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const [post, setPost] = useState({});
  const {
    title,
    thumbnail,
    category,
    deadline,
    description,
    numberOfVolunteer,
    location,
    organizer,
  } = post;
  useEffect(() => {
    axiosSecure.get(`/volunteer-post/${id}`).then((res) => setPost(res.data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const {
      email,
      name,
      volunteerEmail,
      volunteerName,
      numberOfVolunteer,
      ...volunteerReq
    } = initialData;

    volunteerReq.organizer = {
      email,
      name,
    };
    volunteerReq.deadline = deadline;
    volunteerReq.postId = id;
    volunteerReq.category = category;
    volunteerReq.volunteer = {
      volunteerEmail,
      volunteerName,
    };
    console.log(volunteerReq);
    axiosSecure.post("/volunteer-request", volunteerReq).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Request Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/manage-my-post");
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Volunteer Request</title>
      </Helmet>

      <div className="bg-base-300 my-10 p-6 md:p-20 rounded-lg">
        <h1 className="text-3xl lg:text-4xl text-accent font-bold text-center mb-5">
          Request to Be a Volunteer
        </h1>
        <p className="text-gray-500 text-center lg:w-9/12 mx-auto mb-5">
          Use this form to share details about your volunteer support needs. By
          providing clear information, you can easily connect with contributors
          eager to help
        </p>
        <form onSubmit={handleSubmit}>
          {/* First Row Name and email */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Organizer Name
                  </span>
                </div>
                <input
                  type="text"
                  name="name"
                  readOnly
                  defaultValue={organizer?.name}
                  placeholder="name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Organizer Email
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  readOnly
                  defaultValue={organizer?.email}
                  placeholder="email"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          {/* Second Row Thumbnail and Post Title */}
          <div className="md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Thumbnail</span>
                </div>
                <input
                  type="url"
                  name="thumbnail"
                  readOnly
                  defaultValue={thumbnail}
                  placeholder="thumbnail"
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Post Title</span>
                </div>
                <input
                  type="text"
                  name="title"
                  readOnly
                  defaultValue={title}
                  placeholder="title"
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
          </div>

          {/* Third Row Location and Category */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Location</span>
                </div>
                <input
                  type="text"
                  name="location"
                  readOnly
                  defaultValue={location}
                  placeholder="location"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>

            <div className="w-full ">
              {category && (
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">Category</span>
                  </div>
                  <select name="Category" className="select select-bordered">
                    <option disabled selected>
                      {category}
                    </option>
                  </select>
                </label>
              )}
            </div>
          </div>

          {/* Fourth Row Number of volunteer and Deadline */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Number of volunteer
                  </span>
                </div>
                <input
                  type="number"
                  name="numberOfVolunteer"
                  readOnly
                  defaultValue={numberOfVolunteer}
                  placeholder="Number of volunteer"
                  className="input input-bordered pr-6"
                  required
                />
              </label>
            </div>

            <div className="w-full">
              {deadline && (
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">Deadline</span>
                  </div>
                  <DatePicker
                    readOnly
                    placeholderText="pick a date"
                    className="w-full rounded-lg p-2 h-12 outline-none border focus:border-gray-400"
                    selected={deadline}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Fifth Row Description */}
          <div className=" md:flex gap-5 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Description</span>
                </div>
                <textarea
                  type="text"
                  name="description"
                  readOnly
                  defaultValue={description}
                  rows="5"
                  cols="10"
                  placeholder="write somgthing about this game"
                  className="input input-bordered w-full h-[110px] "
                />
              </label>
            </div>
          </div>
          {/* 6th row vlounteer name and email */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Volunteer Name
                  </span>
                </div>
                <input
                  type="text"
                  name="volunteerName"
                  readOnly
                  defaultValue={user?.displayName}
                  placeholder="name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Volunteer Email
                  </span>
                </div>
                <input
                  type="text"
                  name="volunteerEmail"
                  readOnly
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>
          {/* 7th row Suggestion */}
          <div className="md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Suggestion</span>
                </div>
                <input
                  type="text"
                  name="suggestion"
                  placeholder="enter your suggestion"
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Status</span>
                </div>
                <input
                  type="text"
                  name="status"
                  readOnly
                  defaultValue={"requested"}
                  placeholder="title"
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            className="w-full btn btn-accent text-white font-bold"
            value="Request"
          />
        </form>
      </div>
    </>
  );
};

export default VolunteerRequest;
