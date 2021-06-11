import operate from './operate';

function calculate(calculatorData, btnName) {
  let { total, next, operation } = { ...calculatorData };

  if (btnName === '+/-') {
    if (next) {
      next = (next * -1).toString();
    } else if (total) {
      total = (total * -1).toString();
    }
  } else if (btnName === 'AC') {
    total = '';
    next = '';
    operation = null;
  } else if (btnName === '=') {
    total = operate(total, next, operation);
    next = '';
    operation = null;
  } else {
    total += btnName;
  }
}

export default calculate;
