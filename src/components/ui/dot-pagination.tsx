import Dot from "./dot";
const DotPagination = ({
  count,
  currentPage,
}: {
  count: number;
  currentPage: number;
  setCurrentPage: () => void;
}) => {
  console.log("DotPagination", count, currentPage);
  return (
    <div className="flex justify-center items-center gap-5 p-2">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Dot key={index} active={currentPage - 1 === index} />
        ))}
    </div>
  );
};

export default DotPagination;
