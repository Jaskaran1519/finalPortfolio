import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaGit, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[25vh] w-full bg-[#a99ef1] flex justify-center items-center">
      <div className="flex justify-center items-center   gap-11">
        <Link href="https://wa.me/+916284607938">
          <FaWhatsapp size={40} />
        </Link>
        <Link href="https://wa.me/+916284607938">
          <FaGit size={40} />
        </Link>
        <Link href="https://wa.me/+916284607938">
          <FaInstagram size={40} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
