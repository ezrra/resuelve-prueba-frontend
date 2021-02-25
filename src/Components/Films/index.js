import React from 'react';
import './Films.css';
import Film from '../Film';
import i18n from '../../i18n';

const SHIMMER_FILMS_COUNT = 5;

const Films = ({ films, loading }) => {
  const Data = () => {
    if (loading) {
      let shimmerList = [];

      for (let count = 0; count < SHIMMER_FILMS_COUNT; count++) {
        shimmerList.push(<Film key={count} showShimmer />);
      }

      return shimmerList;
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
      <div className="Results-content">
        <span>{i18n.films.results}: {films.length}</span>
      </div>
      <Data />
    </div>
  )
}

export default Films;
