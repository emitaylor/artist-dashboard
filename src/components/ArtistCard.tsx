import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ArtistCard.scss";

type Props = {
  name: string;
  imageUrl: string;
  followers: number;
  streams: number;
  trend: "up" | "down";
};

const ArtistCard = ({ name, imageUrl, followers, streams, trend }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="artist-card" onClick={() => navigate(`/artist/${name}`)}>
      <img src={imageUrl} alt={name} className="artist-card__image" />
      <div className="artist-card__info">
        <h3>{name}</h3>
        <p>👥 {followers.toLocaleString()} followers</p>
        <p>🎧 {streams.toLocaleString()} streams</p>
        <span className={`artist-card__trend ${trend}`}>
          {trend === "up" ? "📈 Up" : "📉 Down"}
        </span>
      </div>
    </div>
  );
};

export default ArtistCard;
