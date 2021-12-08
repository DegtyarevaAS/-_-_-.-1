function getBin(number) {
  const left = number.split('.')[0];
  const right = '0.' + number.split('.')[1];

  const binLeft = getBinLeft(left);
  const binRight = getBinRight(right);

  const bin = binLeft + '.' + binRight;
  return bin;
};

function getBinLeft(left) {
  let bin = "";
  while(left >= 1) {
    bin = left % 2 + bin;
    left = parseInt(left / 2);
  };
  return bin;
};

function getBinRight(right) {
  let bin = "";
  for(let i = 0; i < 10; i++) {
    right = right * 2;
    bin += right.toString().split('.')[0];
    right = '0.' + right.toString().split('.')[1];
  };
  return bin;
};

