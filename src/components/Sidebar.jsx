import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWYyZTg1Mjg0NDQ4YWMwYTlhZWRmOGRhMWY3YWUwNCIsInN1YiI6IjYzYWViYmY2YmU0YjM2MDBkNzNmNzU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MplAuemo-KDY2XwCNj_std6Smg7ILLm7VpZ0SSxBJFo",
  },
};

function Sidebar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data.genres);
        // console.log(data.genres);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="no-scrollbar fixed flex h-screen w-[200px] flex-col items-center overflow-y-scroll bg-gray-900 text-white hover:bg-gray-800">
      <img
        src={logo}
        alt="Logo"
        className="mb-5 mt-6 w-[80px] hover:contrast-125 hover:saturate-150"
      />

      {data.map((item) => {
        return (
          <h1
            key={item.id}
            className="my-4 select-none text-lg font-medium uppercase decoration-red-500 decoration-[3px] underline-offset-4 hover:text-xl hover:underline"
          >
            {item.name}
          </h1>
        );
      })}
    </div>
  );
}

export default Sidebar;
