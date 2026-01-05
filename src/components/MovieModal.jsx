import { CalendarDays, Clock, Film, Star, User, X } from "lucide-react";

function MovieModal({movie, onClose}) {
	console.log(movie);
	
  return (
    <div className="fixed z-10 w-full h-full bg-black/30 top-0 left-0 p-6 flex items-center justify-center">
      <div className="relative max-w-6xl w-full h-full max-h-200 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg)",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-l from-bg via-bg/98 to-bg/70" />

        <div className="relative h-full z-10 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-7">
          <button className="cursor-pointer absolute top-4 right-4 p-2 rounded-full hover:bg-darkGreen/5 transition" onClick={onClose}>
            <X className="text-darkGreen" />
          </button>

          <div className="items-center justify-center shrink-0 hidden md:flex">
            <img
              src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg"
              alt=""
              className="max-w-xs w-full rounded-xl border-4 border-white/20"
            />
          </div>
          <div className="flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden">
            <p className="font-[Playfair_Display] text-darkGreen/30 text-xl md:text-2xl mb-1">
              となりのトトロ
            </p>
            <p className="relative font-[Nunito] font-bold uppercase text-blue text-xs before:absolute before:-bottom-2 before:left-0 before:h-0.5 md:before:h-1 before:w-20 before:bg-blue/50 mb-5">
              Tonari no Totoro
            </p>
            <h3 className="font-[Playfair_Display] text-darkGreen text-4xl md:text-7xl font-bold md:mb-2">
              My Neighbor Totoro
            </h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4 my-4">
              <div className="w-full flex items-center gap-2 md:gap-4 bg-white/80 border border-light/40 rounded-2xl py-3 px-4 md:p-4">
                <Star width={20} height={20} stroke="#4a7c59" />
                <div>
                  <p className="font-[Nunito] text-darkGreen/40 text-[10px] uppercase font-bold">
                    Score
                  </p>
                  <p className="font-[Playfair_Display] text-darkGreen text-lg md:text-xl leading-4 font-semibold">
                    93
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center gap-2 md:gap-4 bg-white/80 border border-light/40 rounded-2xl py-3 px-4 md:p-4">
                <CalendarDays width={20} height={20} stroke="#4a7c59" />
                <div>
                  <p className="font-[Nunito] text-darkGreen/40 text-[10px] uppercase font-bold">
                    Year
                  </p>
                  <p className="font-[Playfair_Display] text-darkGreen text-lg md:text-xl leading-4 font-semibold">
                    1988
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center gap-2 md:gap-4 bg-white/80 border border-light/40 rounded-2xl py-3 px-4 md:p-4">
                <Clock width={20} height={20} stroke="#4a7c59" />
                <div>
                  <p className="font-[Nunito] text-darkGreen/40 text-[10px] uppercase font-bold">
                    Duration
                  </p>
                  <p className="font-[Playfair_Display] text-darkGreen text-lg md:text-xl leading-4 font-semibold">
                    86m
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center gap-2 md:gap-4 bg-white/80 border border-light/40 rounded-2xl py-3 px-4 md:p-4">
                <User width={20} height={20} stroke="#4a7c59" />
                <div className="min-w-0">
                  <p className="font-[Nunito] text-darkGreen/40 text-[10px] uppercase font-bold">
                    Director
                  </p>
                  <p className="font-[Playfair_Display] text-darkGreen text-lg md:text-xl leading-5 font-semibold truncate">
                    Hayao Miyazaki
                  </p>
                </div>
              </div>
            </div>
            <p className="font-[Nunito] text-darkGreen/80 text-md md:text-lg tracking-wide leading-7 mb-5">
              Two sisters move to the country with their father in order to be
              closer to their hospitalized mother, and discover the surrounding
              trees are inhabited by Totoros, magical spirits of the forest.
              When the youngest runs away from home, the older sister seeks help
              from the spirits to find her.
            </p>
            <hr className="text-darkGreen/5 mt-auto" />
            <div className="mt-4 flex items-center gap-4">
              <Film stroke="#1a2e25" />
              <div>
                <p className="font-[Nunito] text-darkGreen/40 text-[10px] uppercase font-bold">
                  Producer
                </p>
                <p className="font-[Playfair_Display] text-darkGreen text-xl leading-5 font-semibold">
                  Hayao Miyazaki
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
