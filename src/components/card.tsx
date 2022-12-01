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
    <div className="card laptop:w-96 tablet:w-70 bg-base-100 shadow-xl m-4">
      <figure>
        <img src={poster} alt={`Movie poster ${title}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <a
          className="link link-primary"
          href={`https://www.imdb.com/title/${imdbid}`}
          target="_blank"
        >
          Imdb Link
        </a>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{year}</div>
          <div className="badge badge-outline">{type}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
