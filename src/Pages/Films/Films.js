import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import FilmList from '../../Components/Films';
import Error from '../../Components/Error/Error';
import { getFilms } from '../../service';
import SearchField from '../../Components/SearchField';
import i18n from '../../i18n';
import { filterObjectArrayByText } from '../../utils';

const Films = () => {
  const [error, setError] = useState('');
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const searchFilms = (search) => {
    if (!search) {
      setFilteredFilms(films);

      return false;
    }

    const filteredFilms = filterObjectArrayByText({
      text: search,
      array: films,
      property: 'title',
    });

    setFilteredFilms(filteredFilms);
  };

  useEffect(() => {
    (async () => {
      setLoading(true)
      const { error, data } = await getFilms();

      if (error) {
        setError(error);
      }

      if (data && data.length) {
        const suggestions = data.map((film) => film.title);

        setFilms(data);
        setFilteredFilms(data);
        setSuggestions(suggestions);
      }

      setLoading(false)
    })();
  }, []);

  return (
    <>
      <Title title={i18n.films.title} />
      <Error text={error} />
      <SearchField
        error={error}
        loading={loading}
        suggestions={suggestions}
        handleSearch={searchFilms}
      />
      <FilmList loading={loading} films={filteredFilms} />
    </>
  )
}

export default Films;
