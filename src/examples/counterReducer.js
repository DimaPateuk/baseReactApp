import { fromJS } from 'immutable';

const initialState = fromJS({
    map: {},
    ids: [],
});

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case 'ADD_COUNTER': {
            const nextMap = state.get('map').set(payload.id, fromJS(payload));
            const nextIds = state.get('ids').push(payload.id);
            
            return state
                .set('map', nextMap)
                .set('ids', nextIds);

        }

        case 'INCREASE_COUNTER': {
            const { id } = payload;
            const count = state.getIn(['map', id, 'count']);
            
            return state.setIn(['map', id, 'count'], count + 1);
        }

        case 'DECREASE_COUNTER': {
            const { id } = payload;
            const count = state.getIn(['map', id, 'count']);
            
            return state.setIn(['map', id, 'count'], count - 1);
        }

        default: {
            return state;
        }
    }
}