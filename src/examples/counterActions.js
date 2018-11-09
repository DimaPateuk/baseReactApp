import uid from 'uid';


export function createCounter () {
    return {
        type: 'ADD_COUNTER',
        payload: {
            id: uid(),
            count: 0,
        }
    };
}

export function increase (id) {
    return {
        type: 'INCREASE_COUNTER',
        payload: {
            id,
        }
    };
}

export function decrease (id) {
    return {
        type: 'DECREASE_COUNTER',
        payload: {
            id,
        }
    };
}