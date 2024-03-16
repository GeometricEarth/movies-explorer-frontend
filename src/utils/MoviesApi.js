const beatfilmMoviesURL = 'https://api.nomoreparties.co/beatfilm-movies';
const baseURL = 'https://api.nomoreparties.co';

export default function getMovies(searchQuery) {
  return fetch(beatfilmMoviesURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Oшибка: ${res.status}`);
      }
      return res.json();
    })
    .then((movies) => {
      return movies.map((movie) => {
        movie.beatFilmId = movie.id;
        delete movie['id'];
        movie.thumbnail = baseURL + movie.image.formats.thumbnail.url;
        movie.image = baseURL + movie.image.url;
        return movie;
      });
    })
    .catch(console.error);
}
