import { connect } from 'dva';
import MyComponent from './myComponent';

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    text: state.global.text,
    name: state.global.name
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch({
      type: 'global/change',
      payload: e.target.value
    })
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

export default App;
