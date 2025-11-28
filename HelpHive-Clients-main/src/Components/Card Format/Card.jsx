import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { BiSolidCategory } from "react-icons/bi";
import { HiCalendarDateRange } from "react-icons/hi2";
import { RiAccountCircle2Line } from "react-icons/ri";

const Card = ({ post }) => {
  const {
    _id,
    thumbnail,
    title,
    description,
    deadline,
    category,
    numberOfVolunteer,
  } = post;
  return (
    <>
      <div
        initial={{ opacity: 0, translateX: "100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 2 }}
        className="card card-compact bg-base-100 border shadow-xl transition hover:scale-105
       overflow-hidden"
      >
        <figure className="p-3">
          <img
            src={thumbnail}
            className="rounded-lg w-full h-[180px] object-cover"
            alt={title}
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title  font-bold text-accent">{title}</h2>
          <p className="text-gray-400">{description.slice(0, 70)} . . .</p>
          <div className="flex justify-between  items-center text-lg ">
            {/* <div className="flex items-center gap-2">
              <span className="text-gray-400">
                <BiSolidCategory />
              </span>{" "}
              <span className="text-accent font-semibold">{category}</span>
            </div> */}
            <div className="flex justify-start items-center text-lg ">
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  <HiCalendarDateRange />
                </span>
                <span className="text-gray-500 font-semibold">
                  {format(new Date(deadline), "P")}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">
                <RiAccountCircle2Line />
              </span>{" "}
              <span className="text-gray-500 font-semibold">
                {numberOfVolunteer} People
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center text-lg mt-3"></div>
          <div className="card-actions justify-center ">
            <Link to={`/volunteer-post/${_id}`}>
              <button className="text-base btn btn-outline btn-accent hover:!text-white ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
