
import './App.css';
import PropTypes from 'prop-types'

function App() {
  return (
    <div className="App">
      <h1> Calculator</h1>
      <p>Welcome to my calculator</p>
     </div>
  );
}

App.propTypes = {
  name : PropTypes.string
}
export default App;
