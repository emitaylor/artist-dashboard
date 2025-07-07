import React, { useState, useEffect } from "react";
import ArtistCard from "./ArtistCard";
import ToggleButton from "./ToggleButton";
import { artists as artistList } from "../data/artists";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("dark");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

    useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const artists = artistList.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>Artist Dashboard</h1>
        <div className="header-actions">
          <input
            type="text"
            placeholder="🔍 Rechercher un artiste"
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <ToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>

      <div className="dashboard__grid">
        {artists.map((artist) => (
          <ArtistCard key={artist.name} {...artist} trend={artist.trend as "up" | "down"} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
