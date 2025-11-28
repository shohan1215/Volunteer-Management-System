// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../Slide/Slide";
import { motion } from "motion/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider3 from "../../assets/Image/slider3.jpg";
import slider4 from "../../assets/Image/Slider4.jpg";
import slider5 from "../../assets/Image/Slider5.jpg";
const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="mt-36"
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <Slide
            image={slider3}
            text="Join Hands Build Communities & Empowering Change Through Volunteerism. Be the Spark That Inspires and Connect Every Corner of the World!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={slider5}
            text="Unite for a Purpose Together We Can Make a Difference. Discover Opportunities to Give Back and  Through Compassionate Action!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={slider4}
            text="Your Time Their Hope Volunteer Today and Be a Part of Transformative Impact. Together We Create Brighter Tomorrows!"
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Banner;
