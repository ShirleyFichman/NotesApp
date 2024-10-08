// SearchBar.js

function SearchBar({ onSearch }) {
    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="m-2 w-80">
            <input
                type="text"
                placeholder="Search notes by title..."
                onChange={handleSearchChange}
                className="border rounded p-2 w-full"
            />
        </div>
    );
}

export default SearchBar;
