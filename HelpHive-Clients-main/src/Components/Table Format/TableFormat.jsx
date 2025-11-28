import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const TableFormat = ({ volunteerNeedPost }) => {
  return (
    <>
      <div className="overflow-x-auto my-14">
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Num</th>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {volunteerNeedPost.map((post, index) => (
              <tr>
                <th className="text-gray-400">{index + 1}</th>
                <td className="font-semibold">{post.title}</td>
                <td className="text-gray-400">
                  {post.description.slice(0, 25)}..
                </td>
                <td>{format(new Date(post.deadline), "dd-MM-yyyy")}</td>
                <td className="font-bold">{post.category}</td>
                <td>
                  <Link
                    to={`/volunteer-post/${post._id}`}
                    className="btn btn-accent text-white"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableFormat;
