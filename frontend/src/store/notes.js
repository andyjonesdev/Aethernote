import { csrfFetch } from './csrf';

const SET_NOTES = '/notes/SET_NOTES'
const SET_NOTE = '/notes/SET_NOTE'
// action creators
const setNotes = (notes) => {
      return {
            type: SET_NOTES,
            payload: notes
      }
}

const setNote = (note) => {
  return {
    type: SET_NOTE,
    payload: note
  }
}

// thunks
//get notes belonging to the supplied notebook
export const getNotesOfNotebook = (notebookId) => async(dispatch) => {
  const res = await csrfFetch(`/api/notes/notebooks/${notebookId}`);
  const data = await res.json();
  dispatch(setNotes(data));
  return;
}

//get one specific note's title and content
export const getIndividualNote = (noteId) => async(dispatch) => {
  const res = await csrfFetch(`/api/notes/${noteId}`)
  const data = await res.json();

  dispatch(setNote(data))
  return
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
    case SET_NOTE:
      newState = Object.assign({}, state)
      newState.noteToEdit = action.payload;
      return newState
    default:
      return state;
  }
};

export default notesReducer
