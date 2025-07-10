const SIZE = 10;
const MIN = -100;
const MAX = 100;

const numLen = Math.max(MIN.toString().length, MAX.toString().length);

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const addSpaces = (num) => {
  let numArr = num.toString().split('');
  while (numArr.length < numLen) {
    numArr.unshift(' ');
  }

  return numArr.join('');
}

const cells = [];
let minNum = Infinity;
let minIndx = 0;

for (let i = 0; i < SIZE; i++) {
  const row = [];

  let minPos = Infinity;
  let r = 0;
  let p = 0;
  let n = 0;

  for (let j = 0; j < SIZE + 1; j++) {
    const num = rand(MIN, MAX);
    if (num < minNum) {
      minNum = num;
      minIndx = i;
    }

    if (num > 0 && num < minPos) {
      minPos = num;
    }

    if (num > 0) {
      p++;
      n = 0;
      if (p >= 3) {
        r++;
        p = 1;
      }
    } else if (num < 0) {
      n++;
      p = 0;
      if (n >= 3) {
        r++;
        n = 1;
      }
    } else {
      p = 0;
      n = 0;
    }

    row.push(addSpaces(num));
  }

  row.push('|');
  row.push(addSpaces(minPos));
  row.push('|');
  row.push(r);

  cells.push(row);
}

for (let i = 0; i < SIZE; i++) {
  cells[i].unshift(minIndx === i ? '*' : ' ')
  console.log(cells[i].join(' '));
}
