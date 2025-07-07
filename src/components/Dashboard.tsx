import React, { useState } from "react";
import ArtistCard from "./ArtistCard";
import { artists as artistList } from "../data/artists";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  const [query, setQuery] = useState("");

  const filtered = artistList.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>Artist Dashboard</h1>
        <input
          type="text"
          placeholder="🔍 Rechercher un artiste"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>

      <div className="dashboard__grid">
        {filtered.map((artist) => (
          <ArtistCard key={artist.name} {...artist} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
