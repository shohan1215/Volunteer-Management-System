import React from "react";

const NoData = ({ text }) => {
  return (
    <>
      <div className="flex items-center justify-center my-14 md:my-24 lg:my-32">
        <div className="text-xl md:text-2xl lg:text-4xl font-bold text-red-500">!! {text}</div>
      </div>
    </>
  );
};

export default NoData;
