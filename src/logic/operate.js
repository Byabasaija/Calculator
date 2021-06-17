import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  let result;

  switch (operation) {
    case 'X':
      result = x.times(y);
      break;
    case '%':
      result = x.times(y).div(100);
      break;
    case '-':
      result = x.minus(y);
      break;
    case '+':
      result = x.plus(y);
      break;
    case '÷':
      if (y.toString() !== '0') {
        result = x.div(y);
      } else {
        result = "Can't devide by 0";
      }

      break;
    default:
      result = 0;
  }

  return result.toString();
};

export default operate;
