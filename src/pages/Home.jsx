import { use, useEffect, useState } from "react";
import Banner from "../assets/banner.png";
import AboutSection from "../components/AboutSection";
import FilterSection from "../components/FilterSection";
import MoviesSection from "../components/MoviesSection";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDirector, setSelectedDirector] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const directors = Array.from(new Set(movies.map((movie) => movie.director)));
  const directorOptions = [
    { value: "", label: "All directors" },
    ...directors.map((director) => ({
      value: director,
      label: director,
    })),
  ];

  const years = Array.from(new Set(movies.map((movie) => movie.release_date)));
  const yearOptions = [
    { value: "", label: "All years" },
    ...years.map((year) => ({
      value: year,
      label: year,
    })),
  ];

  const sortOptions = [
    { value: "", label: "Sort by" },
    { value: "score", label: "Score" },
    { value: "year", label: "Year" },
  ];

  function handleResetFilters() {
    setSearch("");
    setSelectedDirector("");
    setSelectedYear("");
    setSelectedSort("");
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError(null)
        setIsLoading(true)
        const res = await fetch("https://ghibliapai.vercel.app/films");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies();
  }, []);

  return (
    <main className="w-full px-6">
      <section className="max-w-7xl mx-auto pt-6 md:py-10">
        <h1 className="text-darkGreen font-[Playfair_Display] font-bold text-2xl text-center uppercase mb-3 md:text-5xl md:tracking-wider">
          A Journey Through Magical Worlds
        </h1>
        <p className="text-darkGreen opacity-60 font-[Nunito_Sans] text-sm text-center uppercase tracking-widest mb-3 md:text-base md:mb-6">
          A tribute to Studio Ghibli Mastery
        </p>

        <div className="rounded-2xl overflow-hidden">
          <img src={Banner} className="object-cover object-center" />
        </div>

        <p className="text-darkGreen opacity-70 font-[Nunito_Sans] text-xs text-center max-w-2xl mx-auto mt-3 md:text-base md:mt-5">
          Explore the magical worlds created by Studio Ghibli. From the spirits
          of the forest to the castles in the sky, discover the stories that
          have touched hearts around the globe.
        </p>
      </section>

      <FilterSection
        search={search}
        onSearchChange={setSearch}
        directorOptions={directorOptions}
        selectedDirector={selectedDirector}
        onDirectorChange={setSelectedDirector}
        yearOptions={yearOptions}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        sortOptions={sortOptions}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
        onResetFilters={handleResetFilters}
      />

      <MoviesSection
        movies={movies}
        search={search}
        selectedDirector={selectedDirector}
        selectedYear={selectedYear}
        selectedSort={selectedSort}
        isLoading={isLoading}
        error={error}
      />

      <AboutSection />
    </main>
  );
}
