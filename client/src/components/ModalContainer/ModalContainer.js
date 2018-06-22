import React from "react";
import "./ModalContainer.css"

export const ModalContainer = props => {
  return (
    <div className='modalContainer'>
      
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                    <h2>Modal Header</h2>
            </div>
            <div class="modal-body">
                <p>Some text in the Modal Body</p>
                <p>Some other text...</p>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
  );
}

// Get the modal
var modal = document.getElementById('modalContainer');

// Get the button that opens the modal
var btn = document.getElementById("about");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


export default ModalContainer;







  




