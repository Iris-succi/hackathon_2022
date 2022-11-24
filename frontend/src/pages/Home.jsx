import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <header className="App-header">
      C'est parti les amis
      <SearchBar
        countries={countries}
        setCountries={setCountries}
        search={search}
        setSearch={setSearch}
      />
    </header>
  );
}
