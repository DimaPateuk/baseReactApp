import React from 'react';
import CounterContainer from './CounterContainer';
import PropTypes from 'prop-types'; 
import { List } from 'immutable';

export default function App (props) {
    const { createCounter, counterIds } = props;
    console.log('App render');
    return (
        <section>
            <button onClick={createCounter}>
                {'create counter'}
            </button>
            {   counterIds
                    .map(id => <CounterContainer key={id} id={id}/>)
            }
        </section>
    );
}


App.propTypes  = {
    createCounter: PropTypes.func,
    counterIds: PropTypes.instanceOf(List),
}

App.defaultProps  = {
    // createCounter: noop,
    counterIds: List(),
}