import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import Loading from "./Loading";

function MoviesSection({
  search,
  movies,
  selectedDirector,
  selectedYear,
  selectedSort,
  isLoading,
  error,
}) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDirector =
      selectedDirector === "" || movie.director === selectedDirector;

    const matchesYear =
      selectedYear === "" || movie.release_date === selectedYear;

    return matchesSearch && matchesDirector && matchesYear;
  });

  const sortedMovies = [...filteredMovies];

  if (selectedSort) {
    sortedMovies.sort((a, b) => {
      if (selectedSort === "year") {
        return b.release_date - a.release_date;
      }
      if (selectedSort === "score") {
        return b.rt_score - a.rt_score;
      }
      return 0;
    });
  }

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

  let moviesContent;
  const hasActiveFilters = search || selectedDirector || selectedYear;

  if (isLoading) {
    moviesContent = <Loading />;
  } else if (error) {
    moviesContent = (
      <p className="font-[Nunito] text-darkGreen/70 tracking-wider text-center text-base md:text-xl mb-4">
        The films couldn’t reach us this time. Please try again later.
      </p>
    );
  } else if(filteredMovies.length === 0 && hasActiveFilters ) {
    moviesContent = (
      <p className="font-[Nunito] text-darkGreen/70 tracking-wider text-center text-base md:text-xl mb-4">
          No movies found. Try adjusting your filters.
        </p>
    )
  }else {
    moviesContent = (
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            onExplore={() => setSelectedMovie(movie)}
          />
        ))}
      </div>
    );
  }

  return (
    <section id="movies"className="max-w-7xl mx-auto py-8 md:py-10">
      <h2 className="text-darkGreen font-[Playfair_Display] font-bold text-xl uppercase ml-4 mb-6 relative before:absolute before:bottom-0 before:-left-4 before:w-1 before:h-6 before:bg-green md:text-2xl md:before:h-8">
        The Collection
      </h2>

      {moviesContent}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}

    </section>
  );
}

export default MoviesSection;
