const API_URL = process.env.REACT_APP_API_URL;

export const getFilms = async () => {
  try {
    const response = await fetch(`${API_URL}/films`);
    const data = await response.json();

    return { data };
  } catch (err) {
    return { error: `Error: ${err}` };
  }
};
