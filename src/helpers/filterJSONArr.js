const filterJSONArr = (inJSONArr,filterKey,filterValue) => {
  let outJSONArr = [];
  for (let i of inJSONArr) {
    if (i[filterKey] === filterValue) {
      outJSONArr.push(i);
    }
  }
  return outJSONArr;
};

export default filterJSONArr;