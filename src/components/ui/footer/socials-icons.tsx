import Link from "next/link";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaMapLocationDot,
} from "react-icons/fa6";
const SocialsIcons = () => {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <Link
        href={"https://www.facebook.com/almayarlibya/"}
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaSquareFacebook className="text-2xl" />
      </Link>
      <Link
        href={
          "https://www.linkedin.com/in/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%85%D8%B9%D9%8A%D8%A7%D8%B1-%D9%84%D9%84%D8%AA%D8%A3%D9%87%D9%8A%D9%84-%D9%88%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-286553142/"
        }
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaLinkedin className="text-2xl" />
      </Link>
      <Link
        href={"https://maps.app.goo.gl/tteUmmaz1t5gSYsz9"}
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaMapLocationDot className="text-2xl" />
      </Link>
    </div>
  );
};

export default SocialsIcons;
