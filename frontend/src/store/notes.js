import { csrfFetch } from './csrf';

const SET_NOTES = '/notes/setNote'

// action creators
const setNotes = (notes) => {
      return {
            type: SET_NOTES,
            payload: notes
      }
}

// thunks
//get notes belonging to the supplied notebook
export const getNotesofNotebook = (notebookId) => async(dispatch) => {
      const res = await csrfFetch(`/api/notes/notebook/${notebookId}`);
      const data = await res.json();
      dispatch(setNotes(data));
      return;
}

//making frontend component for note list

// juicer
const initialState = { notes: null };
const notesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_NOTES:
      newState = Object.assign({}, state);
      newState.notes = action.payload;
      return newState;
    default:
      return state;
  }
};

//TODO put this in big reducer
//useEffect, useSelector, useDispatch to test it in a component
export default notesReducer
