import { createSelector } from 'reselect';

export function counterIds (state) {
    return state.getIn(['counters', 'ids']);
}

export function counterMap (state) {
    return state.getIn(['counters', 'map']);
}

const getId = (state, { id }) => id;

export const counterDataById = createSelector(
    [getId, counterMap],
    (id, counterMap) => {
        return counterMap.get(id);
    }
);

