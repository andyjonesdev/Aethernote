
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { getIndividualNote } from '../../store/notes'
import '../NotebooksList/NotebookList.css'

export default function EditNoteForm() {
      const { noteId } = useParams()
      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(getIndividualNote(noteId))
            console.log('NOTE ID JUST CHANGED')
            console.log(noteId)
      }, [noteId])

      const noteObj = useSelector(state => state.notes.noteToEdit)
      const [title, setTitle] = useState(noteObj.title);
      const [content, setContent] = useState(noteObj.content);
      const [validationErrors, setValidationErrors] = useState([]);


      useEffect(() => {
            const validate = () => {
            const validationErrors = [];

            if (!title) validationErrors.push('New title cannot be blank');
            if (!content) validationErrors.push('New content cannot be blank');

            return validationErrors;
            }
            const errors = validate();
            if (errors.length > 0) {
                  setValidationErrors(errors)
            } else setValidationErrors([]);
      }, [title, content])

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedNote = {
      title,
      content
    };
    console.log(updatedNote)
    //use my thunk, passing in the updatedNote
    //API is looking for { title, content } from thunk
    //maybe set title to whatever is in the Redux store for these
//     setTitle('');
//     setContent('');
  };

  return (
    <div className='edit-note-form'>
      <h2>Edit Note</h2>
      {validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map(error => <li key={error}>{error}</li>)}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            onChange={(e) => {
                  setTitle(e.target.value)
                  // console.log('THIS IS E.TARGET.VALUE', e.target.value)
                  // console.log('THIS IS TITLE', title)
                  // console.log('THIS IS VALIDATIONERRORS', validationErrors)
            }}
            value={title}
          />
        </div>
        <div>
            <label htmlFor='content'>Content</label>
            <textarea
            id='content'
            name='content'
            onChange={(e) =>{
                  setContent(e.target.value)
                  // console.log('THIS IS E.TARGET.VALUE', e.target.value)
                  // console.log('THIS IS CONTENT', content)
                  // console.log('THIS IS VALIDATIONERRORS', validationErrors)
            }}
            value={content}
            />
        </div>
        <button disabled={validationErrors.length}>Save Changes</button>
      </form>
    </div>
  );
}

//
