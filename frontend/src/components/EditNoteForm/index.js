
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { getIndividualNote, updateANote } from '../../store/notes'
import '../NotebooksList/NotebookList.css'

export default function EditNoteForm() {
      const { noteId } = useParams()
      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(getIndividualNote(noteId)) //updates state.notes.noteToEdit
      }, [noteId])

      const noteObj = useSelector(state => state.notes.noteToEdit) || {title: '', content: ''}

      const [title, setTitle] = useState(noteObj.title);
      const [content, setContent] = useState(noteObj.content);
      const [validationErrors, setValidationErrors] = useState([]);

      useEffect(() => {
            setTitle(noteObj.title)
            setContent(noteObj.content)
      }, [noteId, noteObj])

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
      content,
      id: noteObj.id
    };

    dispatch(updateANote(updatedNote))
  };

return (
  <div className='edit-note-form'>
    <div className='list-title'>Edit Note</div>
    {validationErrors.length > 0 && (
      <div className='error-div'>
        The following errors were found:
        <ul>
          {validationErrors.map(error => <li className='error-list-item' key={error}>{error}</li>)}
        </ul>
      </div>
    )}
    <form spellcheck='false' className='edit-note-form-form' action='/' onSubmit={onSubmit}>
      <div className='edit-title-div'>
        {/* <span className='.title-label'>Title</span> */}
        <label className='title-label' htmlFor='title'>Title</label>
        <input
          name='title'
          id='edit-note-title'
          type='text'
          onChange={(e) => {
                setTitle(e.target.value)
          }}
          value={title}
        />
      </div>
      <div className='edit-content-div'>
          <label className='content-label' htmlFor='content'>Content</label>
          <textarea
          id='edit-note-content'
          name='content'
          onChange={(e) =>{
                setContent(e.target.value)
          }}
          value={content}
          />
      </div>
      <button className='edit-form-button' disabled={validationErrors.length}>Save Changes</button>
    </form>
  </div>
);
}
