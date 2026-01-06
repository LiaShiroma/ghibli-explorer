import { Search } from "lucide-react";

function SearchInput({ search, onSearchChange }) {
	
	return (
		<div className="relative flex items-center bg-bg rounded-2xl p-4">
			<input type="text" placeholder="Search by title... " className="w-full text-green font-[Playfair_Display] placeholder:text-green placeholder:font-[Playfair_Display] placeholder:opacity-30 focus:outline-none " value={search} onChange={(event) => onSearchChange(event.target.value) }/>
			<Search className="text-green opacity-30"/>
		</div>
	)
}

export default SearchInput;