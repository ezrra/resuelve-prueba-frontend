import React from 'react';
import './Film.css';
import placeholderImage from '../../assets/images/film-poster-placeholder.png';

const Film = ({ film }) => {
  const { title, producer } = film;

  return (
    <div className="Film-content">
      <img className="Film-image" src={placeholderImage} alt="Film" />
      <h4 className="Film-title">{title}</h4>
      <h5 className="Film-director">{producer}</h5>
    </div>
  )
}

export default Film;
