const sendRequest = (method, path, body) => {
  const development =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  const apiUrl = development
    ? 'http://localhost:3001'
    : 'api.geomovie.nomoredomainsicu.ru';

  const settings = {
    method: method,
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
  };
  if (!!body && Object.keys(body).length !== 0) {
    settings.body = JSON.stringify({ ...body });
  }
  return fetch(`${apiUrl}${path}`, settings).then((resp) => {
    if (!resp.ok) {
      return Promise.reject(resp);
    }
    return resp;
  });
};

export const saveMovie = ({
  country,
  director,
  duration,
  year,
  description,
  trailerLink,
  beatFilmId,
  nameRU,
  nameEN,
  image,
  thumbnail,
}) => {
  const payload = {
    country,
    director,
    image,
    duration,
    year,
    description,
    trailerLink,
    thumbnail,
    beatFilmId,
    nameEN,
    nameRU,
  };

  return sendRequest('POST', '/movies ', payload).then((resp) => {
    return resp.json();
  });
};

export const deleteMovie = (id) => {
  return sendRequest('DELETE', `/movies/${id}`);
};

export const getSavedMovies = () => {
  return sendRequest('GET', '/movies').then((resp) => {
    return resp.json();
  });
};
