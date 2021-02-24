import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import FilmList from '../../Components/Films';
import Error from '../../Components/Error/Error';
import { getFilms } from '../../service';
import SearchField from '../../Components/SearchField';
import i18n from '../../i18n';

const Films = () => {
  const [error, setError] = useState('');
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const { error, data } = await getFilms();

      if (error) {
        setError(error);
      }

      if (data && data.length) {
        setFilms(data);
        setSuggestions(data.map((film) => film.title));
      }

      setLoading(false)
    })();
  }, []);

  return (
    <>
      <Title title={i18n.films.title} />
      <Error text={error} />
      <SearchField suggestions={suggestions} />
      <FilmList loading={loading} films={films} />
    </>
  )
}

export default Films;
