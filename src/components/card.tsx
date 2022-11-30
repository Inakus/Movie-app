import React from "react";

const Card = ({
  title,
  poster,
  type,
  year,
  imdbid,
}: {
  title: string;
  poster: string;
  type: string;
  year: string;
  imdbid: string;
}) => {
  return (
    <div className="bg-red-500 w-[20rem] h-[20rem] m-2">
      <h3>{title}</h3>
      <img src={poster} alt={`movie poster ${title}`} />
      <p>{type}</p>
      <p>{year}</p>
      <p>{imdbid}</p>
    </div>
  );
};

export default Card;
