import Counter from './Counter';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { counterDataById } from './counterSelectors';
import { increase, decrease } from './counterActions';

const mapStateToProps = () => {
    console.log(123);
    return createStructuredSelector({
        data: counterDataById,
    });
}
const mapActionsToProps = {
    increase,
    decrease
};

export default connect(mapStateToProps, mapActionsToProps)(Counter);