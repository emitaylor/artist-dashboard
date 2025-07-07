import React, { useState, useEffect } from "react";
import ArtistCard from "./ArtistCard";
import ToggleButton from "./ToggleButton";
import { artists as artistList } from "../data/artists";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("dark");

const toggleTheme = () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  document.body.className = newTheme;
};

  const artists = artistList.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>Artist Dashboard</h1>
        <div className="header-actions">
          <input className="search-input" type="text" placeholder="🔍 Rechercher un artiste" />
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
