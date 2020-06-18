const ajaxPath = (endpoint) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // console.log('endpoint','http://localhost:8080/',endpoint);
    return 'http://localhost:8080/' + endpoint;
  } else {
    // console.log('endpoint','https://teamail-api.herokuapp.com/');
    return 'https://teamail-api.herokuapp.com/' + endpoint;
  }
    
};

export default ajaxPath;