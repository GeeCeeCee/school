const findLength = (nums1, nums2) => {
  const prevRow = new Array(nums1.length).fill(0);
  const curRow = [...prevRow];

  let maxVal = 0;

  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      curRow[j] = nums1[j] === nums2[i] ? (prevRow[j - 1] ?? 0) + 1 : 0;
      maxVal = Math.max(maxVal, curRow[j]);
    }

    prevRow.splice(0, prevRow.length);
    prevRow.push(...curRow);
  }

  return maxVal;
};

const nums1 = [1, 2, 3, 2, 1];
const nums2 = [3, 2, 1, 4, 7];

const res = findLength(nums1, nums2);
console.table(res);
