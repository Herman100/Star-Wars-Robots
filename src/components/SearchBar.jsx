export default function SearchBar({ searchFieldChange }) {
  return (
    <div className="tc pa2">
      <input type="text" name="" id="search" onInput={searchFieldChange} />
    </div>
  );
}
