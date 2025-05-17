const Dot = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`rounded-full size-2 sm:size-4 bg-blue-900 ${
        active ? "" : "opacity-50"
      }`}
    ></div>
  );
};

export default Dot;
