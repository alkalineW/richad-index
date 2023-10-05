export function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export function sortOutArray(array, lengthOfArray) {
  const result = [];
  if (array.length <= lengthOfArray) {
    result.push(array);
  } else {
    const nuArray = array.slice(0, lengthOfArray);
    const remainingArray = array.slice(lengthOfArray);
    result.push(nuArray);
    result.push(...sortOutArray(remainingArray, lengthOfArray));
  }
  return result;
}

  }
