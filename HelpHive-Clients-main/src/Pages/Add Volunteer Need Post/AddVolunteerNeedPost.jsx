import React, { useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { format } from "date-fns";
import Space from "../../Components/Space/Space";

const AddVolunteerNeedPost = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(Date.now());
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const organizerName = form.name.value;
    const organizerEmail = form.email.value;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const location = form.location.value;
    const category = form.Category.value;
    const numberOfVolunteer = parseInt(form.volunteerNum.value);
    const deadline = format(new Date(startDate), "P");
    const description = form.description.value;
    const organizer = {
      email: organizerEmail,
      name: organizerName,
    };

    const volunteerNeedPost = {
      organizer,
      thumbnail,
      title,
      location,
      category,
      numberOfVolunteer,
      deadline,
      description,
    };
    axiosSecure.post("/volunteer-need-post", volunteerNeedPost).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Post Added",
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
        <title>Add Volunteer Need Post</title>
      </Helmet>

      <div className="bg-base-300 mt-32  p-6 md:p-20 rounded-lg">
        <h1 className="text-3xl lg:text-4xl text-accent font-bold text-center mb-5">
          Add a Volunteer Need Post
        </h1>
        <p className="text-gray-500 text-center lg:w-9/12 mx-auto mb-5">
          This enables you to share opportunities for volunteer support. Fill
          out this form to detail your needs, making it easier to connect with
          willing contributors
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
                    Organizer Email
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  readOnly
                  defaultValue={user?.email}
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
                  placeholder="location"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>

            <div className="w-full ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Category</span>
                </div>
                <select
                  name="Category"
                  className="select select-bordered "
                  required
                >
                  <option disabled selected>
                    choose a category
                  </option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Social Service</option>
                  <option>Animal Welfare</option>
                </select>
              </label>
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
                  name="volunteerNum"
                  placeholder="Number of volunteer"
                  className="input input-bordered pr-6"
                  required
                />
              </label>
            </div>

            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Deadline</span>
                </div>
                <DatePicker
                  placeholderText="pick a date"
                  className="w-full rounded-lg p-2 h-12 outline-none border focus:border-gray-400"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </label>
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
                  rows="5"
                  cols="10"
                  placeholder="write somgthing about this game"
                  className="input input-bordered w-full h-[110px] "
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            className="w-full btn btn-accent text-white font-bold"
            value="Add Post"
          />
        </form>
      </div>
      <Space></Space>
    </>
  );
};

export default AddVolunteerNeedPost;
