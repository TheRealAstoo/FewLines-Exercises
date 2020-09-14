function arrayCrusher(firstArray, secondArray) {
  const newArray = [...firstArray, ...secondArray];
  return newArray;
}

function recursiveBouncer(list) {
  if (list.length) {
    const [head, ...tail] = list;

    console.log(head);
    const newList = tail;

    recursiveBouncer(newList);
  } else {
    return list;
  }
}

recursiveBouncer([1, 2, 3, 4]);

module.exports = {
  arrayCrusher,
  recursiveBouncer,
};
