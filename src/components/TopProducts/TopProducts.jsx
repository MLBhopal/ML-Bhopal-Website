import React from "react";
import Img1 from "../../assets/shirt/RishabhGupta.svg";
import Img2 from "../../assets/shirt/Rishav.svg";
import Img3 from "../../assets/shirt/Samarth.svg";
import Img4 from "../../assets/shirt/Disha.svg";
import Img5 from "../../assets/shirt/Abhishek.svg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Rishabh Gupta",
    description: "Lead of ML Bhopal, OWASP Bhopal, passionate about building the ML community and organizing innovative events.",
  },
  {
    id: 2,
    img: Img2,
    title: "Rishav Kumar",
    description: "Co-lead and developer at ML Bhopal, an advocate for AI and ML. Handles community outreach and event management.",
  },
  {
    id: 3,
    img: Img4,
    title: "Disha Patidar",
    description: "ML engineer at ML Bhopal, specializing in computer vision and NLP. She is committed to democratizing ML education.",
  },
  {
    id: 4,
    img: Img3,
    title: "Samarth Soni",
    description: "Tech enthusiast and core member of ML Bhopal. Loves working on deep learning and collaborative projects.",
  },
  {
    id: 5,
    img: Img5,
    title: "Abhishek Malvia",
    description: "Member of ML Bhopal, focused on AI research and development, contributing to project architecture and growth.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container mx-auto text-center">
        {/* Header section */}
        <div className="text-center mb-14">
          
          <h1 data-aos="fade-up" className="text-3xl font-bold mt-2">
            Meet Our Team
          </h1>
          <br />
          <p data-aos="fade-up" className="text-sm text-primary">
            Our dedicated team is committed to driving innovation and collaboration in the field of Machine Learning. 
          </p>
          <br />
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-primary hover:text-black relative shadow-xl duration-300 group max-w-[240px] transition-transform transform hover:scale-105"
            >
              {/* Image section */}
              <div className="h-[120px]">
                <img
                  src={data.img}
                  alt={`${data.title}'s profile`}
                  className="w-[120px] h-[120px] object-cover rounded-full mx-auto transform -translate-y-12 group-hover:scale-110 duration-300 drop-shadow-md"
                />
              </div>

              {/* Stars section */}
              <div className="w-full flex items-center justify-center gap-1 mt-[-40px] mb-4">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>

              {/* Details section */}
              <div className="px-4 pb-6 text-center">
                <h1 className="text-xl font-bold mb-2 h-[40px] flex items-center justify-center">
                  {data.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-black duration-300 text-sm h-[60px] overflow-hidden">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-2 px-6 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
