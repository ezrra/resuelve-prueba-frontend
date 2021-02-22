import React from 'react';
import './Films.css';
import Film from '../Film';

const Films = ({ films, loading }) => {
  const Data = () => {
    if (loading) {
      return null;
    }

    if (films.length === 0) {
      return <div>No se encontraron peliculas</div>;
    }

    return (
      films.map((film, key) => <Film key={key} film={film} />)
    )
  }
  return (
    <div className="List-content">
      <Data />
    </div>
  )
}

export default Films;
