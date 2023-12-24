import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 800);

  return (
    <>
      {loading && <Loading />}

      <div className="flex flex-row bg-gray-300">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
