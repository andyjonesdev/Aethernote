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
export const getNotesofNotebook = (notebook) => async(dispatch) => {
      const res = await csrfFetch(`/api/notes/notebook/${notebook.id}`);
      const data = await res.json();
      dispatch(setNotes(data));
      return;
}

//making frontend component for note list

// juicer
