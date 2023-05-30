import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../store/reducers/searchSlice";

function SearchBar() {
	const dispatch = useDispatch();
	const [searchTerm, setNewSearchTerm] = useState("");
	

	const handleSearch = (event) => {
		event.preventDefault();
		dispatch(setSearchTerm(searchTerm));
		// Otras acciones ??
	};



	return (
		<form className="search-box" onSubmit={handleSearch}>
			<button className="btn-search">
				<img className="search-icon" src="/search-icon.png" alt="" />
			</button>
			<input
				type="text"
				className="input-search"
				placeholder="Busca tecler..."
				value={searchTerm}
				onChange={(event) => setNewSearchTerm(event.target.value)}
				
			/>
		</form>
	);
}

export default SearchBar;
