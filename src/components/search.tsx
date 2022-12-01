import { useState } from "react";

const Search = ({ giveSearch }: { giveSearch: Function }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex w-full items-center justify-center flex-col m-5">
      {/* <h2 className="mt-4 text-xl">Search what movie you wan't to see?</h2> */}
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          giveSearch(search);
        }}
        className="input input-bordered w-full max-w-lg"
        type="text"
        placeholder="What movie you want to search?"
      />
    </div>
  );
};

export default Search;
