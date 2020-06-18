const right = (inString,length) => {
  return inString.split('').slice(inString.length - length, inString.length).join('');
};

export default right;