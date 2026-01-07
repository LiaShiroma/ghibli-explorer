import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

function MoviesSection({ search, movies, selectedDirector }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());
      
    const matchesDirector =
      selectedDirector === "" || movie.director === selectedDirector;

    return matchesSearch && matchesDirector;
  });

  useEffect(() => {
    if (selectedMovie) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [selectedMovie]);

  useEffect(() => {
    if (selectedMovie) {
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedMovie]);

  function handleCloseModal() {
    setSelectedMovie(null);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  }

  return (
    <section className="max-w-7xl mx-auto py-8 md:py-10">
      <h2 className="text-darkGreen font-[Playfair_Display] font-bold text-xl uppercase ml-4 mb-6 relative before:absolute before:bottom-0 before:-left-4 before:w-1 before:h-6 before:bg-green md:text-2xl md:before:h-8">
        The Collection
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            onExplore={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}

      {search && filteredMovies.length === 0 && (
        <p className="font-[Nunito] text-darkGreen/70 tracking-wider text-center text-base md:text-xl mb-4">
          No results for "{search}"
        </p>
      )}
    </section>
  );
}

export default MoviesSection;
