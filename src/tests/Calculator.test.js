import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('renders calculator correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
