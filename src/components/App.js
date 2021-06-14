import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };
  }

  handleClick(btnName) {
    let { total } = this.state;
    total = total === 'Error' ? '' : total;
    const { next, operation } = this.state;

    this.setState(calculate({ total, next, operation }, btnName));
  }

  dispResult() {
    const { total, next, operation } = this.state;
    let result = '';

    if (total) {
      result += total;
    }
    if (operation) {
      result += operation;
    }
    if (next) {
      result += next;
    }
    return result;
  }

  render() {
    return (
      <div>
        <Display result={this.dispResult()} />
        <ButtonPannel handleClick={(label) => this.handleClick(label)} />
      </div>

    );
  }
}

export default App;
