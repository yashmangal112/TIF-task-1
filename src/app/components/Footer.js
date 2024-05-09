// components/Footer.js

const Footer = () => {
    return (
      <div className="bg-blue-500 p-4 text-white">
        <div className="flex justify-between">
          <div>
            <div className="mb-2">Your Logo</div>
            <a href="#" className="text-white">Contact Us</a>
          </div>
          <div>
            <a href="#" className="text-white">More</a>
            {/* Add more links as needed */}
          </div>
          <div>
            {/* Add social media links */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  