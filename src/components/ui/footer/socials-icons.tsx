import Link from "next/link";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareYoutube,
  FaSquareXTwitter,
  FaTiktok,
} from "react-icons/fa6";
const SocialsIcons = () => {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <Link
        href={"https://www.facebook.com/yourcompany"}
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaSquareFacebook className="text-2xl" />
      </Link>
      <Link
        href={"https://www.instagram.com/yourcompany"}
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaSquareInstagram className="text-2xl" />
      </Link>
      <Link
        href={"https://www.linkedin.com/company/yourcompany"}
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaLinkedin className="text-2xl" />
      </Link>
      <Link
        href={"https://www.youtube.com/yourcompany"}
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaSquareYoutube className="text-2xl" />
      </Link>
      <Link
        href={"https://www.twitter.com/yourcompany"}
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaSquareXTwitter className="text-2xl" />
      </Link>
      <Link
        href={"https://www.tiktok.com/@yourcompany"}
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaTiktok className="text-2xl" />
      </Link>
    </div>
  );
};

export default SocialsIcons;
