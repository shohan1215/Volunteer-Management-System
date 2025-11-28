import React from "react";
import toast from "react-hot-toast";
import Space from "../../Components/Space/Space";
import { Helmet } from "react-helmet";

const Contact = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    toast.success("Message Sent");
    form.reset();
  };
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-accent text-center mt-32">
            Contact Us
          </h1>
          <p className="text-xl font-semibold mt-4 text-center lg:w-8/12 mx-auto">
            Welcome to our Contact Us page! Whether you have questions,
            feedback, or just want to say hello, we’d love to hear from you. Use
            the form below to send us a message, or reach out directly via email
            or phone. Our team is always ready to assist and ensure you have the
            best experience possible. Let's connect!
          </p>

          <div className="hero mt-5">
            <div className="hero-content  w-full lg:w-2/3  rounded-xl shadow-xl ">
              <div className="card  w-full  ">
                <form onSubmit={handleMessage} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message Box*</span>
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="message"
                      className="input input-bordered h-28"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-accent text-white">Sent</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Space></Space>
        </div>
      </div>
    </>
  );
};

export default Contact;
