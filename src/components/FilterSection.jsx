import Button from "./Button";
import SearchInput from "./SearchInput";
import Select from "./Select";
import { ArrowDownNarrowWide, Calendar, User } from "lucide-react";

function FilterSection({ search, onSearchChange, directorOptions, selectedDirector, onDirectorChange}) {
  return (
    <section className="max-w-7xl mx-auto py-8 md:py-10">
      <h2 className="text-darkGreen font-[Playfair_Display] font-bold text-xl uppercase ml-4 mb-6 relative before:absolute before:bottom-0 before:-left-4 before:w-1 before:h-6 before:bg-green md:text-2xl md:before:h-8">
        Find a movie
      </h2>

      <div className="bg-white p-4 rounded-3xl border border-light shadow-lg">
        <SearchInput search={search} onSearchChange={onSearchChange} />

        <div className="flex flex-col md:flex-row items-end justify-between gap-4 mt-6">
          <Select
            label="Director"
            options={directorOptions}
            value={selectedDirector}
            onChange={onDirectorChange}
            icon={<User size={16} className="text-green/50" />}
          />
          {/* <Select
            label="Era"
            icon={<Calendar size={16} className="text-green/50" />}
          />
          <Select
            label="Sort by"
            icon={<ArrowDownNarrowWide size={16} className="text-green/50" />}
          /> */}

          <Button variant="primary">Reset Filters</Button>
        </div>
      </div>
    </section>
  );
}

export default FilterSection;
