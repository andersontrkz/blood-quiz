export const shuffledList = <T>(list: T[]): T[] => {
  if (list.length <= 1) {
    return list;
  }

  let shuffled = list.slice().sort(() => Math.random() - 0.5);
  
  while (shuffled.every((value, index) => value === list[index])) {
    shuffled = shuffledList(list);
  }

  return shuffled;
};
  