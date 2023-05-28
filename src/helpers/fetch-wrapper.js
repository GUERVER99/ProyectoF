export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
  };
  
  function request(method) {
    return (url, body, token) => {
      const requestOptions = {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
  
      if (body) {
        requestOptions.body = JSON.stringify(body);
      }
  
      return fetch(url, requestOptions).then(handleResponse);
    };
  }
  
  function handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
  
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
  }
  
      
