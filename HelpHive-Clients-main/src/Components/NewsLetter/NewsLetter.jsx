import { IoMdMail } from "react-icons/io";
import toast from "react-hot-toast";
import Space from "../Space/Space";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      toast.error("please enter the email first");
      return;
    } else {
      toast.success("Subscription done");
      e.target.email.value = "";
    }
  };
  return (
    <>
      <div className=" text-center ">
        <h1 className="text-2xl md:text-4xl font-bold text-accent ">
          News Letter
        </h1>
        <Space></Space>
        <div className="text-7xl text-accent flex justify-center text-center">
          <IoMdMail />
        </div>
        <p className="font-bold text-xl md:w-1/3 mx-auto mt-5">
          Subscribe to have new game release lists delivered directly to your inbox
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 flex justify-center gap-3">
            <input
              type="email"
              name="email"
              placeholder="type your email here"
              className="input input-bordered w-full max-w-lg"
            />
            <button className="btn btn-accent text-white">Subscribe</button>
          </div>
        </form>
        <p className="text-gray-400 mt-5 ">
          We do not send spam or share your mail with third parties
        </p>
        <Space></Space>
      </div>
     
    </>
  );
};

export default NewsLetter;