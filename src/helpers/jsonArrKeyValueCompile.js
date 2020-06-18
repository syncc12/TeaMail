const jsonArrKeyValueCompile = (inJSONArr,inKey) => {
  let outArr = [];
  for (let i of inJSONArr) {
    if (!outArr.includes(i[inKey])) {
      outArr.push(i[inKey]);
    }
  }
  return outArr;
};

export default jsonArrKeyValueCompile;