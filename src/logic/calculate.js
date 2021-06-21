import operate from './operate';

const calculate = (calculatorData, btnName) => {
  let { total, next, operation } = { ...calculatorData };

  switch (btnName) {
    case '+/-':
      if (next) {
        next = (next * -1).toString();
      } else if (total) {
        total = (total * -1).toString();
      }
      break;
    case 'AC':
      total = '';
      next = '';
      operation = null;
      break;
    case '=':
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = '';
        operation = null;
      }
      break;
    case '.':
      if (next) {
        next += next.includes('.') ? '' : btnName;
      } else {
        total += total.includes('.') ? '' : btnName;
      }
      break;
    case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
      if (!operation) {
        total += btnName;
      } else {
        next += btnName;
      }
      break;
    default:
      operation = btnName;
  }

  return { total, next, operation };
};

export default calculate;
