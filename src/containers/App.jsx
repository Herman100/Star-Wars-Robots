import { Fragment } from "react";
import Card from "../components/Card";
import "tachyons";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const searchFieldChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Fragment>
      <Title />
      <SearchBar searchFieldChange={searchFieldChange} />
      <Card searchField={searchField} />
    </Fragment>
  );
}

export default App;
