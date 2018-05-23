export const createOptions = (options = {}) => {
  const jwt = localStorage.getItem('jwt');

  if (jwt) {
    return {...options, headers: {...options.headers, 'Authorization': `Bearer ${jwt}`}};
  } else {
    return options;
  }
}