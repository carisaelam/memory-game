export default function shuffle(array) {
  console.log('Shuffling this array: ', array);

  const newArray = [...array];

  let currentIndex = array.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  console.log('new array', newArray);
  return newArray;
}
