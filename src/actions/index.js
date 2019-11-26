import jsonPlaceholder from '../apis/jsonPlaceholder';

// a function that is returning a function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
}
