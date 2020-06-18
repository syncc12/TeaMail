const proper = (inString) => {
  const length = inString.length;
  return `${inString.split('')[0].toUpperCase()}${inString.split('').slice(1,length).join('').toLowerCase()}`;
};

export default proper;