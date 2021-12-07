import { csrfFetch } from './csrf';

const SET_NOTEBOOKS = '/notebooks/setNotebook'

//action creators
const setNotebooks = (notebooks) => {
      return {
            type: SET_NOTEBOOKS,
            payload: notebooks
      }
}

// make a thunk to fetch the backend route for notebooks
// API is expecting to be handed one user object
// useSelector to grab the user from state
export const getNotebooks = (user) => async (dispatch) => {
      const response = await csrfFetch(`/api/notebooks/user/${user.id}`
      );
      const data = await response.json();
      console.log('XXXXXXXXXXXXXX', data)
      dispatch(setNotebooks(data))
      return response;
};

//reducer
const initialState = { notebooks: null };
const notebooksReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_NOTEBOOKS:
      newState = Object.assign({}, state);
      newState.notebooks = action.payload;
      return newState;
    default:
      return state;
  }
};

export default notebooksReducer;
