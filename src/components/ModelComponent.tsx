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

// import React from 'react';

// // Define the type for the props
// type ModalProps = {
//   item: any; // Replace `any` with the appropriate type if you have one
//   onClose: () => void;
//   onRemove: () => void; // Callback to handle item removal
// };

// const ModelComponent: React.FC<ModalProps> = ({ item, onClose, onRemove }) => {
//   if (!item) return null; // If no item is passed, don't render the modal

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>Confirm Removal</h2>
//         <p>Are you sure you want to remove {item.name} from the cart?</p>
//         <div className="modal-buttons">
//           <button onClick={onRemove}>Yes, Remove</button>
//           <button onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModelComponent;
