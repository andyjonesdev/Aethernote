import React, { useState, useEffect } from "react";

import EditNotebookForm from '../EditNotebookModal/EditNotebookForm'
import { Modal } from '../../context/Modal';
import '../LoginFormModal/LoginForm.css'

function EditNotebookModal({ notebookId, title }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='edit-note-button'>
      <button onClick={() => setShowModal(true)}>
        <i class="far fa-edit"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='modal-upper-left'>Rename Notebook</div>
          <EditNotebookForm notebookId={notebookId} title={title} setShowModal={setShowModal}/>
        </Modal>
      )}
    </div>
  );
}

export default EditNotebookModal
