import { useState } from "react";

const Pagination = ({ givePage }: { givePage: Function }) => {
  const [page, setPage] = useState(1);

  return (
    <div className="btn-group m-5">
      <button
        onClick={() => {
          if (page > 0) {
            givePage(page - 1);
            setPage(page - 1);
          }
        }}
        className="btn"
      >
        «
      </button>
      <button
        onClick={() => {
          givePage(1);
          setPage(1);
        }}
        className="btn"
      >
        {page}
      </button>
      <button
        onClick={() => {
          if (page <= 100) {
            givePage(page + 1);
            setPage(page + 1);
          }
        }}
        className="btn"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
