import React from "react";
import Img1 from "../../assets/women/ML Nexus.png";
import Img2 from "../../assets/women/IMG_8294.jpeg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "ML Nexus With CTF",
    color: "LNCT Group of colleges",
    date: "August 10, 2024",
    description: "An event focusing on Machine Learning with a CTF challenge.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img1,
    title: "ML Huddle crack the CyberSecurity Puzzle",
    color: "Hotel Bentree",
    date: "September 15, 2024",
    description: "Exploring cybersecurity challenges and ML applications.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img1,
    title: "101 with Machine Learning & Revisiting CyberSecurity",
    color: "Location",
    date: "October 5, 2024",
    description: "An introductory session on ML and cybersecurity basics.",
    aosDelay: "400",
  },
  {
    id: 1,
    img: Img1,
    title: "ML Nexus With CTF",
    color: "LNCT Group of colleges",
    date: "August 10, 2024",
    description: "An event focusing on Machine Learning with a CTF challenge.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img1,
    title: "Rishav Kumar",
    
    color: "Location",
    date: "September 30, 2024",
    description: "Guest speaker session on advancements in ML.",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            A Community of Learners, Innovators, and Tech Enthusiasts
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Highlights from Our Recent Events
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore some of the exciting events and workshops organized by ML Bhopal. From hackathons to workshops, we bring learning and innovation to life.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="relative group space-y-3 w-[200px] overflow-hidden rounded-md"
              >
                {/* Image wrapper with lift effect on hover */}
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:-translate-y-2"
                  />
                  {/* Bottom overlay for date and description */}
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-[#f5d7a1] bg-opacity-90 text-black p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                  >
                    <p className="text-sm font-semibold">{data.date}</p>
                    <p className="text-xs mt-1">{data.description}</p>
                  </div>
                </div>
                {/* Title and location */}
                <div className="p-2">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  {data.rating && (
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
