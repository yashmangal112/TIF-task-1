// components/About.js
import Image from "next/image";
const About = () => {
    return (
      <div className="flex p-12 text-white justify-between gap-10 mx-7">
        {/* Left side: Image */}
        <Image
          src="/a1ef27ac038072c6f30264ab0d7bc72d.jpg"
          alt="About Us Image"
          className="mr-8"
          width={"384"}
          height={"468"}
        />
        {/* Right side: About content */}
        <div className="text-justify">
          <h1 className="text-4xl font-semibold text-blue-800 mb-4 ">About Us</h1>
          <p className="text-xl leading-7 font-normal mt-4 mb-4 text-gray-700">
            {/* Lorem ipsum lines */}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
          <button className="mt-8 w-32 h-12 rounded-full bg-red-600 text-white">Read More</button>
        </div>
      </div>
    );
  };
  
  export default About;
  