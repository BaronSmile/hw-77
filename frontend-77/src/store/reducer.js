import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
} from "./actions";

const initialState = {
    comments: [],
    loading: false,
    error: null
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {...state, loading: true};
        case FETCH_COMMENTS_SUCCESS:
            return {...state, comments: action.comments};
        default:
            return state;
    }
};

export default reducer;