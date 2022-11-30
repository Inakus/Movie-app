import { IApi } from "../interface/interface";
import Card from "./card";
import Search from "./search";

const Mainbody = ({
  giveSearch,
  data,
}: {
  giveSearch: Function;
  data: IApi;
}) => {
  return (
    <main className="w-full flex-1">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="text-[3rem]">Welcome to Movie Search App</h1>
        <hr className="border-solid w-full border-red-500 mt-2" />
        <Search
          giveSearch={(v: string) => {
            giveSearch(v);
          }}
        />
        <hr className="border-solid w-full border-red-500 mt-2" />
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
      </div>
    </main>
  );
};

export default Mainbody;
