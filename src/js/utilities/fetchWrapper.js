const isValid = response => {
  if (response.status < 200 || response.status >= 300) {
    throw new Error('invalid request');
  } else {
    return response;
  }
}

const parseJson = response => response.json();

export const fetchWrapper = (url, options) => {
  return fetch(url, options)
            .then(isValid)
            .then(parseJson);
}