export default function requestErrorHandler(res){
  switch(res.status) {
    case 429: return 'При регистрации пользователя произошла ошибка.';
    case 409: return 'Пользователь с таким email уже существует.';
    default: return `${res.status} ${res.statusText}`;
  }
}