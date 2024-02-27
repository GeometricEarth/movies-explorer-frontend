const sendRequest = (path, settings) => {
  const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  const apiUrl = development ? 'http://127.0.0.1:3001' : 'api.geomovie.nomoredomainsicu.ru';

  return fetch(`${apiUrl}${path}`, settings).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Oшибка: ${res.status}`);
    }
    return res;
  });
};