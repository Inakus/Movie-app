import { useEffect, useState } from "react";

import Footer from "./components/footer";
import Mainbody from "./components/mainbody";
import { IApi } from "./interface/interface";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<IApi>();

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        import.meta.env.VITE_API_LINK + search + "&page=" + page,
        {
          method: "GET",
        }
      );
      const jsonData = await data.json();
      setResult(jsonData);
    };
    api();
  }, [search, page]);

  if (!result) return <h1>Loading...</h1>;

  return (
    <div className="flex w-full h-screen justify-between flex-col">
      <Mainbody
        giveSearch={(v: string) => {
          setPage(1);
          setSearch(v);
        }}
        givePage={(v: number) => {
          setPage(v);
        }}
        data={result}
      />
      <Footer />
    </div>
  );
}

export default App;
