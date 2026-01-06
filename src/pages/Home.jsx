import { useState } from "react";
import Banner from "../assets/banner.png";
import AboutSection from "../components/AboutSection";
import FilterSection from "../components/FilterSection";
import MoviesSection from "../components/MoviesSection";

export default function Home() {
  const [search, setSearch] = useState("");

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
      
      <FilterSection search={search} onSearchChange={setSearch}/>

      <MoviesSection search={search} />

      <AboutSection />

    </main>
  );
}
