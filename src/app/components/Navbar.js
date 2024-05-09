import NextLink from "next/link";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" p-8 flex items-center justify-between">
      <div>
            <Image src="/logo.png" width={50} height={50} alt="Logo" className="mr-4" />
      </div>
      <div>
        <button className="border border-white rounded-2xl text-white px-2 py-1">Get In Touch</button>
      </div>
    </nav>
  );
};

export default Navbar;
