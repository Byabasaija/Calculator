import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculate from '../logic/calculate';

const App = () => (
  <>
    <Display />
    <ButtonPannel />
  </>
);

calculate({ total: '33', next: '3', operation: '%' }, '=');

export default App;
