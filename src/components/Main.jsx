import { useEffect, useState } from "react";

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWYyZTg1Mjg0NDQ4YWMwYTlhZWRmOGRhMWY3YWUwNCIsInN1YiI6IjYzYWViYmY2YmU0YjM2MDBkNzNmNzU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MplAuemo-KDY2XwCNj_std6Smg7ILLm7VpZ0SSxBJFo",
  },
};

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        // console.log(data.results[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-3 ml-[220px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item) => {
        //Destructuring required objects
        const { id, title, poster_path, vote_average } = item;

        return (
          <div
            key={id}
            className="flex w-[300px] select-none flex-col items-center justify-center gap-4 rounded-xl border-2 border-gray-400 bg-gray-200 p-4 text-center shadow-xl hover:shadow-2xl"
          >
            <h1 className="line-clamp-2 text-xl font-semibold">{title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt="Poster"
              className="w-4/5 rounded-lg hover:contrast-125 hover:saturate-150"
            />
            <h3 className="text-lg font-medium">Ratings : {vote_average}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
