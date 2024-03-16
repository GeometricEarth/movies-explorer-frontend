const beatfilmMoviesURL = 'https://api.nomoreparties.co/beatfilm-movies';

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
      return Promise.reject(resp.statusText);
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
  ...rest
}) => {
  const image = beatfilmMoviesURL + rest.image.url;
  const thumbnail = beatfilmMoviesURL + rest.image.formats.thumbnail.url;

  // const payload2 = {
  //   country: data.country,
  //   director: data.director,
  //   duration: data.duration,
  //   year: data.year,
  //   description: data.description,
  //   image: beatfilmMoviesURL + data.image.url,
  //   trailerLink: data.trailerLink,
  //   thumbnail: beatfilmMoviesURL + data.image.formats.thumbnail.url,
  //   movieId: data.beatFilmId,
  //   nameRU: data.nameRU,
  //   nameEN: data.nameEN,
  // };
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
