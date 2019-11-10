import {
    SET_ROUTE
} from '../actions/routerActions';

const initialState = {
    route: 'home'
};

export default function routerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ROUTE:
            console.log(action)
            return ({
                route: action.text || 'NaN'
            });

        default:
            return state;
    }
}