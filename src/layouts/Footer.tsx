import { FCC } from "@/types";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: FCC = () => {
  return (
    <div className="footer flex flex-col items-center justify-start py-4 relative z-[-1]">
      <div className="flex w-[100%] justify-center mt-10 gap-8">
        <div className="rounded-full border-2 border-whit p-2">
          <FaFacebook />
        </div>
        <div className="rounded-full border-2 border-whit p-2">
          <FaTwitter />
        </div>
        <div className="rounded-full border-2 border-whit p-2">
          <FaYoutube />
        </div>
        <div className="rounded-full border-2 border-whit p-2">
          <FaLinkedin />
        </div>
      </div>

      <span className="text-[1rem] text-center mt-[2rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
};

export default Footer;
