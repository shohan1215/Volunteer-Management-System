import React from "react";
import Card from "./Card";

const CardFormat = ({ volunteerNeedPost }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-14">
        {volunteerNeedPost.map((post) => (
          <Card key={post._id} post={post}>
            {" "}
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardFormat;
