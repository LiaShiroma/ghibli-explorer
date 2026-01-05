import { ArrowRight, Calendar, Star, User } from "lucide-react";
import Button from "./Button";

function MovieCard({ movie, onExplore }) {
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
        <Button variant="light" onClick={onExplore}>
          Explore
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default MovieCard;
