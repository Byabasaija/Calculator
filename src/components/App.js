import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculate from '../logic/calculate';

calculate({ total: '10', next: '5', operation: 'X' }, '=');

const App = () => (
  <>
    <Display />
    <ButtonPannel />
  </>
);

export default App;
