import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <>
    {result}
  </>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
