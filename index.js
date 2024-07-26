const fibs = (n) => {
  const arr = [];
  let index = 0;
  while (arr.length < n) {
    if (index == 0) {
      arr.push(0);
    } else if (index == 1) {
      arr.push(1);
    } else {
      arr.push(arr[index - 1] + arr[index - 2]);
    }
    index++;
  }
  return arr;
};

console.log(fibs(8));

const fibsRec = (n) => {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const seq = fibsRec(n - 1);
    seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
    return seq;
  }
};

console.log(fibsRec(8));

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const halfPoint = Math.floor(arr.length / 2);
  const leftHalfRaw = arr.slice(0, halfPoint);
  const rightHalfRaw = arr.slice(halfPoint);

  const leftHalf = mergeSort(leftHalfRaw);
  const rightHalf = mergeSort(rightHalfRaw);

  let sortedArray = [];

  const len = leftHalf.length + rightHalf.length;

  let leftHead = leftHalf.shift();
  let rightHead = rightHalf.shift();

  while (sortedArray.length < len) {
    if (leftHead < rightHead) {
      sortedArray.push(leftHead);
      leftHead = leftHalf.shift();
      if (leftHead === undefined) {
        sortedArray.push(rightHead);
        if (rightHalf.length > 0) {
          sortedArray = sortedArray.concat(rightHalf);
        }
      }
    } else {
      sortedArray.push(rightHead);
      rightHead = rightHalf.shift();
      if (rightHead === undefined) {
        sortedArray.push(leftHead);
        if (leftHalf.length > 0) {
          sortedArray = sortedArray.concat(leftHalf);
        }
      }
    }
  }
  return sortedArray;
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
