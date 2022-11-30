import { useState } from "react";

const Search = ({ giveSearch }: { giveSearch: Function }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex w-full items-center justify-center flex-col">
      <h2 className="mt-4 text-xl">Search what movie you wan't to see</h2>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          giveSearch(search);
        }}
        className="w-[90%] border border-cyan-500 m-4"
        type="text"
      />
    </div>
  );
};

export default Search;
