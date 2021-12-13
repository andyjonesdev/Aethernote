import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { createANote } from '../../store/notes'
import '../NotebooksList/NotebookList.css'

export default function CreateNoteForm() {
      const { id:notebookId } = useParams()
      const dispatch = useDispatch()

      const [title, setTitle] = useState('');
      const [content, setContent] = useState('');
      const [validationErrors, setValidationErrors] = useState([]);

      useEffect(() => {
            const validate = () => {
                  const validationErrors = [];

                  if (!title) validationErrors.push('Title cannot be blank');
                  if (!content) validationErrors.push('Content cannot be blank');
                  if (title.length > 50) validationErrors.push('Title must be shorter than 50 characters')
                  return validationErrors;
            }
            const errors = validate();
            if (errors.length > 0) {
                  setValidationErrors(errors)
            } else setValidationErrors([]);
      }, [title, content])

  const onSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      content,
      notebookId
    };
    dispatch(createANote(newNote))
  };

      return (
      <div className='edit-note-form'>
      <div className='list-title'>Create Note</div>
      {validationErrors.length > 0 && (
            <div className='error-div'>
            The following errors were found:
            <ul className='error-list'>
            {validationErrors.map(error => <li className='error-list-item' key={error}>{error}</li>)}
            </ul>
            </div>
      )}
      <form spellcheck='false' className='edit-note-form-form' action='/' onSubmit={onSubmit}>
            <div className='edit-title-div'>
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
            <button className='create-note-button' disabled={validationErrors.length}>Create Note</button>
      </form>
      </div>
      );
}
