import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card Format/Card";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import Space from "../Space/Space";

const VolunteerNeedsNow = () => {
  const navigate = useNavigate();
  const [needNow, SetNeedNow] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/volunteer-need-now`).then((res) => {
      SetNeedNow(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <h1 className="text-xl lg:text-4xl font-bold text-center text-accent ">
          <Typewriter
            words={["Volunteer Needs Now"]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <Space></Space>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {needNow.map((post) => (
            <Card key={post._id} post={post}></Card>
          ))}
        </motion.div>
        <div className="flex justify-end my-8 mr-10">
          <button
            onClick={() => navigate("/all-volunteer-need-post")}
            className="flex items-center justify-end gap-2 text-red-500 font-bold text-lg"
          >
            See All <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default VolunteerNeedsNow;
