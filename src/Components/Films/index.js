import React from 'react';
import './Films.css';
import Film from '../Film';
import i18n from '../../i18n';

const Films = ({ films, loading }) => {
  const Data = () => {
    if (loading) {
      return null;
    }

    if (films.length === 0) {
      return <div>{i18n.films.noRecords}</div>;
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
