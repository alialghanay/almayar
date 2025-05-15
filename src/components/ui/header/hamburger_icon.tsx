import { FiMenu, FiX } from "react-icons/fi";

const HamburgerIcon = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="sm:hidden p-4">
      <button onClick={onClick}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  );
};

export default HamburgerIcon;
