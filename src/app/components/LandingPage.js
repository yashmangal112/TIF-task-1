import Image from "next/image";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <div className="relative flex p-8 text-white">
          <div>
              <h3 className="mr-8 text-primary font-bold text-5xl">
                  Discover the <span className="text-red-600">Best</span> Food and Drinks
              </h3>
              <p className="text-gray-700 mt-2 mb-3">Naturally made Healthcare Products for the better care & support of your body.</p>
              <button className="mt-12 w-32 h-12 rounded-full bg-red-600 text-white">Explore Now!</button>
          </div>
          <div className="relative">
              <Image src='/landingPageImage.jpg' width={35} height={80} className="top-1 right-0 absolute" />
              <div className="absolute w-[752] h-[839] top-0 bg-red-600 opacity-50"></div>
          </div>
      </div></>
  );
};

export default LandingPage;
