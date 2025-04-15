import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import hero1 from "../../assets/img/hero/money.svg";
import hero2 from "../../assets/img/hero/scholarship.svg";
import hero3 from "../../assets/img/hero/teacher.svg";
import hero4 from "../../assets/img/hero/library.svg";

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      title: "Start your beautiful and bright future",
      subtitle: "Welcome to EDUKA",
      description:
        "Education is the foundation of a better future. At our institution, we provide quality learning experiences that inspire curiosity, creativity, and critical thinking",
    },
    {
      src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800",
      title: "Start your beautiful and bright future",
      subtitle: "Welcome to EDUKA",
      description:
        "Education is the foundation of a better future. At our institution, we provide quality learning experiences that inspire curiosity, creativity, and critical thinking",
    },
    {
      src: "https://images.unsplash.com/photo-1677594334053-afe4b41aa0a3?w=800",
      title: "Start your beautiful and bright future",
      subtitle: "Welcome to EDUKA",
      description:
        "Education is the foundation of a better future. At our institution, we provide quality learning experiences that inspire curiosity, creativity, and critical thinking",
    },
    {
      src: "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=800",
      title: "Start your beautiful and bright future",
      subtitle: "Welcome to EDUKA",
      description:
        "Education is the foundation of a better future. At our institution, we provide quality learning experiences that inspire curiosity, creativity, and critical thinking",
    },
  ];

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
      setSwiperReady(true);
    }
  }, []);

  return (
    <div className="relative w-full mb-10 md:mb-52">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <img
                src={img.src}
                alt={`Slide ${index}`}
                className="w-full h-[90vh] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                <div className="text-white text-center md:text-left max-w-2xl w-full space-y-4 md:space-y-6 md:absolute top-12">
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                    {img.subtitle}
                  </h4>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {img.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    {img.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4">
                    <button className="bg-[#FDA31B] hover:bg-[#e6951a] text-white px-6 py-2 w-[200px] rounded-tr-xl rounded-bl-xl text-sm sm:text-base">
                      Get Started
                    </button>
                    <button className="bg-white hover:bg-gray-200 text-[#262626] px-6 py-2 w-[200px] rounded-tr-xl rounded-bl-xl text-sm sm:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute z-50 w-full flex justify-center md:justify-between items-center px-5 bottom-5 md:top-1/2 md:bottom-auto md:-translate-y-1/2">
          <div
            ref={prevRef}
            className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full cursor-pointer"
          >
            <IoIosArrowBack size={24} />
          </div>
          <div
            ref={nextRef}
            className="text-white bg-black/50 hover:bg-black/70 p-2 rounded-full cursor-pointer"
          >
            <IoIosArrowForward size={24} />
          </div>
        </div>
      </Swiper>

      {/* Cards Section */}
      <div className="relative md:absolute z-40 right-0 md:right-4 bottom-0 md:bottom-[-160px] xl:bottom-[-150px] w-full px-4 flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 mt-8 md:mt-0">
        {[
          { img: hero2, number: "1", title: "Scholarship Facility" },
          { img: hero3, number: "2", title: "Skilled Lecturers" },
          { img: hero4, number: "3", title: "Book Library Facility" },
          { img: hero1, number: "4", title: "Affordable Price" },
        ].map((card, i) => (
          <div
            key={i}
            className="shadow-2xl bg-white w-full sm:w-[48%] md:w-[220px] xl:w-[250px] min-h-[200px] px-4 py-6 flex flex-col justify-between rounded-r-[50px]"
          >
            <div className="flex items-center justify-between w-full mb-4">
              <img
                src={card.img}
                alt=""
                className="w-14 h-14 bg-[#116E63] rounded-full p-2"
              />
              <p className="text-2xl font-bold text-[#116E63]">{card.number}</p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-base lg:text-lg">{card.title}</h1>
              <p className="text-sm text-gray-600">
                It is a long established fact that a reader will be distracted.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
