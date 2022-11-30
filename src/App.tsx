import { useEffect, useState } from "react";

import Footer from "./components/footer";
import Mainbody from "./components/mainbody";
import Navbar from "./components/navbar";
import { IApi } from "./interface/interface";

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<IApi>();

  useEffect(() => {
    const api = async () => {
      const data = await fetch(import.meta.env.VITE_API_LINK + search, {
        method: "GET",
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };
    api();
  }, [search]);

  if (!result) return <h1>Loading...</h1>;

  console.log(result);

  return (
    <div className="flex w-full h-screen justify-between flex-col">
      <Navbar />
      <Mainbody
        giveSearch={(v: string) => {
          setSearch(v);
        }}
        data={result}
      />
      <Footer />
    </div>
  );
}

export default App;
