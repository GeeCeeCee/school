/**
 * @param {string} s
 * @return {number}
 */
const partitionString = (s) => {
  let len = s.length;
  let memo = 1;
  let lastIndex = 0;

  let i = 1;
  while (i < len) {
    let prevString = s.slice(lastIndex, i);
    if (prevString.indexOf(s[i]) > -1) {
      lastIndex = i;
      memo++;
    }

    i++;
  }

  return memo;
};
