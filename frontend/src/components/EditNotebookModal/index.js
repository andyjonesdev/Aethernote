import React, { useState, useEffect } from "react";

import EditNotebookForm from '../EditNotebookModal/EditNotebookForm'
import { Modal } from '../../context/Modal';

function EditNotebookModal({ notebookId, title }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='edit-note-button'>
      <button onClick={() => setShowModal(true)}>
        <i class="far fa-edit"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div>Rename Notebook: {title}</div>
          <EditNotebookForm notebookId={notebookId}/>
        </Modal>
      )}
    </div>
  );
}

export default EditNotebookModal
