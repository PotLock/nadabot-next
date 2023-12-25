const shuffleArray = (array) => {
  const newArray = array.slice(); // Create a copy of the original array
  let currentIndex = newArray.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element, if it's not the original position
    if (currentIndex !== randomIndex) {
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
  }

  return newArray;
};

export const shuffleMultiDimensionalArray = (array) => {
  const flattened = array.flat(); // Flatten the multi-dimensional array
  const shuffled = shuffleArray(flattened); // Shuffle the flattened array

  let index = 0;
  const result = [];

  // Reconstruct the shuffled multi-dimensional array
  array.forEach((subArray) => {
    const newArray = [];
    subArray.forEach(() => {
      newArray.push(shuffled[index]);
      index++;
    });
    result.push(newArray);
  });

  return result;
};
