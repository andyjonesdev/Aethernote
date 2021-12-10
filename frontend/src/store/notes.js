import { csrfFetch } from './csrf';

const SET_NOTES = 'notes/SET_NOTES'
const SET_NOTE = 'notes/SET_NOTE'
const CREATE_NOTE = 'notes/CREATE_NOTE'
const UPDATE_NOTE = 'notes/UPDATE_NOTE'
const DELETE_NOTE = 'notes/DELETE_NOTE'

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

const createNote = (note) => {
  return {
    type: CREATE_NOTE,
    payload: note
  }
}

const updateNote = (note) => {
  return {
    type: UPDATE_NOTE,
    payload: note
  }
}

const deleteNote = (noteId) => {
  return {
    type: DELETE_NOTE,
    payload: noteId
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

// update a specified note
export const updateANote = (updatedNote) => async(dispatch) => {
  const { title, content, id } = updatedNote
  const res = await csrfFetch(`/api/notes/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title,
      content
    })
  })
  const data = await res.json()
  dispatch(updateNote(data))
}

export const createANote = (newNote) => async(dispatch) => {
  const { userId, title, content, notebookId } = newNote
  console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZ', newNote)
  const res = await csrfFetch('/api/notes', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      title,
      content,
      notebookId
    })
  })
  const data = await res.json()
  dispatch(createNote(data))
}

// delete a specified note
export const deleteANote = (noteId) => async(dispatch) => {
  const res = await csrfFetch(`/api/notes/${noteId}`, { method: 'DELETE' })
  const data = await res.json()

  dispatch(deleteNote(data.noteId))
}

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
    case CREATE_NOTE:
      newState = Object.assign({}, state)
      newState.notes = [...state.notes]
      newState.notes.push(action.payload)
      return newState
    case UPDATE_NOTE:
      newState = Object.assign({}, state)
      const searchId = action.payload.id
      newState.notes = [...state.notes];
      const foundIndex = newState.notes.findIndex(noteObj => noteObj.id === searchId)
      newState.notes[foundIndex] = action.payload
      return newState
    case DELETE_NOTE:
      newState = Object.assign({}, state)
      const deleteId = action.payload
      newState.notes = [...state.notes];
      const deleteIndex = newState.notes.findIndex(noteObj => noteObj.id === deleteId)
      newState.notes.splice(deleteIndex, 1)
      return newState;
    default:
      return state;
  }
};

export default notesReducer
