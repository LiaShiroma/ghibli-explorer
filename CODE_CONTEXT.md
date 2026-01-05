# Ghibli Explorer — Code Context

## src\App.jsx

```jsx
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <Home />
      <Footer />

    </div>
  )
}

export default App

```

## src\components\AboutSection.jsx

```jsx
function AboutSection() {
	return (
		<div className="max-w-4xl mx-auto py-8 md:py-10">
			<h2 className="font-[Playfair_Display] font-bold text-xl text-center mb-6 relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-px before:bg-red/30 md:text-3xl md:before:h-1 md:before:-bottom-3 md:mb-10">About</h2>

			<p className="font-[Nunito] text-darkGreen/70 tracking-wider text-sm md:text-base text-center mb-4">Ghibli Explorer is a front-end project created to celebrate the magical worlds of Studio Ghibli through a calm, visual, and intuitive browsing experience.</p>

			<p className="font-[Nunito] text-darkGreen/70 tracking-wider text-sm md:text-base text-center mb-4">The application allows users to explore Studio Ghibli films by searching, filtering, and sorting titles based on different criteria, transforming a simple movie list into a more immersive and thoughtful discovery journey.</p>

			<p className="font-[Nunito] text-darkGreen/70 tracking-wider text-sm md:text-base text-center mb-4">Studio Ghibli is known for its emotionally rich storytelling, hand-crafted animation, and deep connection with nature, memory, and imagination. This project draws inspiration from those values, aiming to translate the studio’s poetic atmosphere into a digital interface that feels gentle, cinematic, and inviting.</p>
			<p className="font-[Nunito] text-darkGreen/70 tracking-wider text-sm md:text-base text-center">
			Beyond a tribute, Ghibli Explorer is also a technical exploration. It was designed to practice modern front-end development concepts such as component-based architecture, responsive layouts, state management, and user-focused interaction design — always balancing functionality with visual harmony.</p>
		</div>
	)
}

export default AboutSection
```

## src\components\Button.jsx

```jsx
function Button( {variant = "primary", children} ) {
	const baseClasses = "flex items-center justify-center gap-2 transition font-[Nunito] text-sm font-bold cursor-pointer"
	const variants = {
		primary: "bg-darkGreen text-white rounded-xl w-full py-4 px-6  md:w-2xl hover:bg-darkGreen/90",
		light: "bg-white text-darkGreen rounded-full py-3 px-8 hover:bg-bg"
	}
	return (
		<button className={`${baseClasses} ${variants[variant]}`}>{children}</button>
	)
}

export default Button
```

## src\components\FilterSection.jsx

```jsx
import Button from "./Button";
import SearchInput from "./SearchInput";
import Select from "./Select";
import { ArrowDownNarrowWide, Calendar, Film, User } from "lucide-react";

function FilterSection() {
  return (
    <section className="max-w-7xl mx-auto py-8 md:py-10">
      <h2 className="text-darkGreen font-[Playfair_Display] font-bold text-xl uppercase ml-4 mb-6 relative before:absolute before:bottom-0 before:-left-4 before:w-1 before:h-6 before:bg-green md:text-2xl md:before:h-8">
        Find a movie
      </h2>

      <div className="bg-white p-4 rounded-3xl border border-light shadow-lg">
        <SearchInput />

        <div className="flex flex-col md:flex-row items-end justify-between gap-4 mt-6">
          <Select
            label="Director"
            icon={<User size={16} className="text-green/50" />}
          />
          <Select
            label="Era"
            icon={<Calendar size={16} className="text-green/50" />}
          />
          <Select
            label="Genre"
            icon={<Film size={16} className="text-green/50" />}
          />
          <Select
            label="Sort by"
            icon={<ArrowDownNarrowWide size={16} className="text-green/50" />}
          />

          <Button variant="primary">Reset Filters</Button>
        </div>
      </div>
    </section>
  );
}

export default FilterSection;

```

## src\components\Footer.jsx

```jsx
function Footer() {
  return (
    <footer className="mt-4 py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-[Playfair_Display] text-lg text-darkGreen mb-2 font-bold">
          Ghibli Explorer
        </p>

        <p className="font-[Nunito] text-darkGreen/60 text-sm max-w-xl mx-auto mb-4">
          A quiet front-end project inspired by the worlds of Studio Ghibli films.
        </p>

        <p className="font-[Nunito] text-darkGreen/40 text-xs uppercase tracking-widest">
          Designed & developed by Lia • Data provided by Studio Ghibli API
        </p>
      </div>
    </footer>
  );
}

export default Footer;

```

## src\components\Header.jsx

```jsx
import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

const navLinks = ["Search", "Films", "Top Rated", "About"];
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center  border-b border-darkGreen/5 py-2">
        <img src={Logo} />

        <button
          className="md:hidden text-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>

        <nav className="hidden md:flex justify-between items-center gap-12 font-[Nunito] uppercase text-xs text-darkGreen/70">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-sand before:transition-all before:duration-300 hover:before:w-full after:content-['■'] after:absolute after:-right-6 after:transform after:translate-x-1/2 after:bottom-0.5 after:text-sand last:after:content-none "
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 p-4 h-full w-full bg-bg transform transition-all duration-500 ${
          isOpen ? "opacity-100 translate-x-0" : "-translate-x-1080 opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="text-green absolute right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X size={32} />
        </button>
        <nav className="h-full flex flex-col font-[Nunito] uppercase items-center justify-center gap-6 text-darkGreen/70 text-xl">
          {navLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

```

## src\components\MovieCard.jsx

```jsx
import { ArrowRight, Calendar, Star, User } from "lucide-react";
import Button from "./Button";

function MovieCard({ movie }) {
  return (
    <div className="group relative h-106 rounded-4xl overflow-hidden">
      <img
        src={movie.image}
        alt={movie.title}
        className="absolute inset-0 object-cover transform md:group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-darkGreen/50 backdrop-blur-xs opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-700"></div>

      <div className="w-full p-4 flex flex-col items-center justify-center gap-1 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 opacity-100 -translate-y-1/2 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:-translate-y-1/2 transition duration-500">
        <h2 className="font-[Playfair_Display] font-bold text-white text-2xl text-center">
          {movie.title}
        </h2>
        <div className="flex items-center justify-center gap-2">
          <User size={16} className="text-light" />
          <p className="font-[Nunito] text-light text-base text-center tracking-widest">
            {movie.director}
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex items-center justify-center gap-2">
            <Calendar size={14} className="text-light" />
            <p className="font-[Nunito] text-light text-sm text-center tracking-widest">
              {movie.release_date}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Star size={14} className="text-amber" />
            <p className="font-[Nunito] text-amber text-sm text-center tracking-widest">
              {movie.rt_score}
            </p>
          </div>
        </div>
		<Button variant="light">
			Explore 
			<ArrowRight />
		</Button>
      </div>
    </div>
  );
}

export default MovieCard;

```

## src\components\MoviesSection.jsx

```jsx
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MoviesSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch("https://ghibliapi.vercel.app/films");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-8 md:py-10">
      <h2 className="text-darkGreen font-[Playfair_Display] font-bold text-xl uppercase ml-4 mb-6 relative before:absolute before:bottom-0 before:-left-4 before:w-1 before:h-6 before:bg-green md:text-2xl md:before:h-8">
        The Collection
      </h2>

      <div
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}

export default MoviesSection;

```

## src\components\SearchInput.jsx

```jsx
import { Search } from "lucide-react";

function SearchInput() {
	return (
		<div className="relative flex items-center bg-bg rounded-2xl p-4">
			<input type="text" placeholder="Search by title... " className="w-full text-green font-[Playfair_Display] placeholder:text-green placeholder:font-[Playfair_Display] placeholder:opacity-30 focus:outline-none "/>
			<Search className="text-green opacity-30"/>
		</div>
	)
}

export default SearchInput;
```

## src\components\Select.jsx

```jsx
function Select({ label, icon }) {
  return (
    <div className="w-full">
      <label
        htmlFor="director"
        className="block text-xs tracking-widest font-bold text-green opacity-50 uppercase font-[Nunito] mb-2"
      >
        {label}
      </label>

      <div className="flex items-center bg-bg/50 rounded-xl p-4 border border-light/80">
        <select
          id="director"
          name="director"
          className="w-full text-sm font-[Nunito] font-bold text-darkGreen focus:outline-none appearance-none"
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="EU">Europe</option>
        </select>

        {icon}
      </div>
    </div>
  );
}

export default Select;

```

## src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## src\pages\Home.jsx

```jsx
import Banner from "../assets/banner.png";
import AboutSection from "../components/AboutSection";
import FilterSection from "../components/FilterSection";
import MoviesSection from "../components/MoviesSection";

export default function Home() {
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
      
      <FilterSection />

      <MoviesSection />

      <AboutSection />

    </main>
  );
}

```

