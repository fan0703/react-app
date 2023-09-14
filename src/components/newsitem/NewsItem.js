import React from "react";
import "./newsitem.css"
export default function NewsItem({ title, description, url, image }) {
  return (
    <div className="NewsItem">
      <img className="newsImage" src={image} alt={image} />
      <h2 className="newsItem-title"><a href={url}>{title}</a></h2>
      <p className="newsItem-text">{description}</p>
    </div>
  );
}