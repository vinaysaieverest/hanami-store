import React, { useState } from 'react'

function ModelComponent() {
    const[openModal,setOpenModal] = useState(false)
  return (
    <div>
        <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Removal</h2>
        <p>Are you sure you want to remove this item from the cart?</p>
        <div className="modal-buttons">
          <button >Yes, Remove</button>
          <button >Cancel</button>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default ModelComponent

