import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 

class Counter extends PureComponent {
    render () {
        const {
            id,
            data,
            increase,
            decrease,
        } = this.props;
        console.log('Counter render');

        return (
            <section>
                <button onClick={() => increase(id)}>Increase</button>
                <button onClick={() => decrease(id)}>decrease</button>
                {data.get('count')}
            </section>
        ); 
    }
}

Counter.propTypes  = {
    data: PropTypes.object,
    id: PropTypes.string.isRequired,
}

Counter.defaultProps  = {
    // count: 0,
}

export default Counter;