import axios from "axios";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Space from "../Space/Space";

const Event = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/upcoming-event`)
      .then((res) => setEvents(res.data));
  }, []);
  const handleRegister = (id) => {
    const registerEvent = {
      email: user?.email,
      eventId: id,
    };
    axios
      .post(`${import.meta.env.VITE_API}/event-registration`, registerEvent)
      .then((res) => {
        // console.log(res.data);
        if (res?.data?.acknowledged) {
          console.log(res);
          toast.success("Registration Successful");
        } else {
          toast.error(res?.data);
        }
      });
  };
  return (
    <div className=" ">
      <h2 className="text-xl lg:text-4xl font-bold text-center text-accent">
        <Typewriter
          words={["Upcoming Events"]}
          loop={50}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <Space></Space>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-xl transition hover:scale-105
       overflow-hidden"
          >
            <div className="card-body">
              <figure>
                <img
                  className="rounded-lg w-full h-[250px] object-cover"
                  src={event.image}
                  alt="Shoes"
                />
              </figure>
              <h3 className="card-title text-xl font-semibold text-accent">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
              <p className="mt-2 text-gray-400">{event.description}</p>
              <div className="card-actions mt-4">
                {user && user?.email ? (
                  <button
                    onClick={() => handleRegister(event._id)}
                    className="btn btn-accent w-full text-white"
                  >
                    Register Now
                  </button>
                ) : (
                  <button
                    className="btn btn-accent w-full text-white"
                    onClick={() => navigate("/login")}
                  >
                    Register Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Event;
