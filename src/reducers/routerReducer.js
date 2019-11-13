import {
    SET_ROUTE
} from '../actions/routerActions';

const initialState = {
    route: 'NaN'
};

const routerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROUTE:
            return ({ route: action.text || 'NaN' });

        default:
            return state;
    }
}

export default routerReducer;