import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
const SocialsIcons = () => {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <Link
        href={"https://www.facebook.com/almayarlibya"}
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FaSquareFacebook className="text-2xl" />
      </Link>
    </div>
  );
};

export default SocialsIcons;
