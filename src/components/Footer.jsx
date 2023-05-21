import { Link } from "react-router-dom";
import discord from "../assets/Icons.png";

const Footer = () => {
  return (
    <footer className="h-[188px] w-full bg-[#363970] flex flex-col items-stretch justify-between px-2 sm:px-5 text-white">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between mt-10">
        <div>LOGO</div>
        <div className="flex justify-between w-full sm:w-8/12 text-xs md:text-lg">
          <Link>TOS</Link>
          <Link>Privacy Policy</Link>
          <Link>Refund Policy</Link>
          <Link>Disclaimer</Link>
          <Link className="flex">
            <img className="sm:w-7 mr-2" src={discord} alt="" />
            Join Discord
          </Link>
        </div>
      </div>

      <div className="h-[30px] text-xs sm:text-sm px-5 border-r-[1px] border-l-[1px] mx-auto mb-5">
        <p className="text-center pt-1">
          Copyright Pebisnis ( GetFoz ) All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
