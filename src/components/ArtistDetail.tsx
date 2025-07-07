import React from "react";
import { useParams, Link } from "react-router-dom";
import { songsData } from "../data/songs";
import { artists } from "../data/artists";
import "../styles/ArtistDetail.scss";

const ArtistDetail = () => {
  const { name } = useParams();
  const artist = artists.find((a) => a.name === name);
  const songs = songsData[name || ""];

  if (!artist) return <div>Artiste introuvable</div>;

  return (
    <div className="artist-detail">
      <Link to="/" className="artist-detail__back">← Retour</Link>
      <header>
        <img src={artist.imageUrl} alt={artist.name} />
        <h1>{artist.name}</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>🎵 Chanson</th>
            <th>📅 Sortie</th>
            <th>🔊 Streams</th>
            <th>📈 Popularité</th>
            <th>🎬 Vues</th>
          </tr>
        </thead>
        <tbody>
          {songs?.map((song, i) => (
            <tr key={i}>
              <td>{song.title}</td>
              <td>{song.releaseDate}</td>
              <td>{song.streams} <span className="green">{song.streamsChange}</span></td>
              <td>{song.popularity} <span className="green">{song.popularityChange}</span></td>
              <td>{song.views} <span className="green">{song.viewsChange}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistDetail;
