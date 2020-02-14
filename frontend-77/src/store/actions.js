import axiosApi from "../axiosApi";


export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';



export const fetchCommentsRequest = () => {
    return {type: FETCH_COMMENTS_REQUEST};
};
export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const fetchCommentsFailure = error => ({type: FETCH_COMMENTS_FAILURE, error});





export const fetchComments = () => {
    return async (dispatch) => {
        try{
            const res = await axiosApi.get('/threads');
            dispatch(fetchCommentsSuccess(res.data));
        }catch (e) {
            dispatch(fetchCommentsFailure());
        }
    }
};

export const publishComment = (data) => {
    return async (dispatch) => {
        try{
           await axiosApi.post('/threads', data);
        }catch (e) {
            dispatch(fetchCommentsFailure());
        }


    };
};