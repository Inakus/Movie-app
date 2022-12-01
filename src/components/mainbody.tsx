import { IApi } from "../interface/interface";
import Card from "./card";
import Pagination from "./pagination";
import Search from "./search";

const Mainbody = ({
  giveSearch,
  givePage,
  data,
}: {
  giveSearch: Function;
  givePage: Function;
  data: IApi;
}) => {
  return (
    <main className="w-full flex-1">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="laptop:text-[3rem] laptop:leading-7 tablet:text-xl m-5">
          Welcome to Movie Search App
        </h1>
        <Search
          giveSearch={(v: string) => {
            giveSearch(v);
          }}
        />
        <div className="flex flex-wrap justify-center">
          {data.Search?.length &&
            data.Search.map((element) => {
              return (
                <Card
                  key={element.imdbID}
                  title={element.Title}
                  poster={element.Poster}
                  type={element.Type}
                  imdbid={element.imdbID}
                  year={element.Year}
                />
              );
            })}
        </div>
        {parseInt(data.totalResults) > 10 && (
          <Pagination
            givePage={(v: string) => {
              givePage(v);
            }}
          />
        )}
      </div>
    </main>
  );
};

export default Mainbody;
