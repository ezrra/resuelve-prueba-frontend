import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import FilmList from '../../Components/Films';
import Error from '../../Components/Error/Error';
import { getFilms } from '../../service';

const Films = () => {
  const [error, setError] = useState('');
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const { error, data } = await getFilms();

      if (error) {
        setError('Error')
      }

      setFilms(data);
      setLoading(false)
    })();
  }, []);

  return (
    <>
      <Title title="Films" />
      <Error text={error} />
      <FilmList loading={loading} films={films} />
    </>
  )
}

export default Films;
