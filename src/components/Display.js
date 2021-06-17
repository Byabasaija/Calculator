import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ result }) => (
  <div className="Display">
    {result}
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
