import React from 'react';
import './Film.css';
import placeholderImage from '../../assets/images/film-poster-placeholder.png';

const Film = () => {
  return (
    <div className="Film-content">
      <img className="Film-image" src={placeholderImage} alt="Film" />
      <h4 className="Film-title">Castle in the Sky</h4>
      <h5 className="Film-director">Hayao Miyazaki</h5>
    </div>
  )
}

export default Film;
