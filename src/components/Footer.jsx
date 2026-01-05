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
