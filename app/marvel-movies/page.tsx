import React from "react";

const MarvelMovies = () => {
  const moviesList = [
    { title: "Iron Man", year: 2008, phase: "Phase 1" },
    { title: "The Avengers", year: 2012, phase: "Phase 1" },
    { title: "Guardians of the Galaxy", year: 2014, phase: "Phase 2" },
    { title: "Black Panther", year: 2018, phase: "Phase 3" },
    { title: "Avengers: Endgame", year: 2019, phase: "Phase 3" },
    { title: "Spider-Man: No Way Home", year: 2021, phase: "Phase 4" },
  ];

  return (
    <div>
      <h1>Marvel Movies</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Phase</th>
          </tr>
        </thead>
        <tbody>
          {moviesList.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.phase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarvelMovies;
