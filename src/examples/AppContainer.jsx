import App from './App';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { createCounter } from 'src/examples/counterActions';
import { counterIds } from 'src/examples/counterSelectors';

const mapStateToProps = createStructuredSelector({
    counterIds
});
const mapActionsToProps = {
    createCounter
};

export default connect(mapStateToProps, mapActionsToProps)(App);