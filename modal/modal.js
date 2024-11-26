const openBtn = document.querySelectorAll(".open-btn");
const modal = document.querySelectorAll(".modal");
const closeBtn = document.querySelectorAll(".fa-x");

let activeModal = null;  // Track the currently open modal

// Open modal logic
openBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (activeModal !== null) {
            // Close the currently active modal
            activeModal.classList.remove("open");
            activeModal.classList.add("close");
        }
        // Open the selected modal
        modal[index].classList.add("open");
        modal[index].classList.remove("close");
        activeModal = modal[index]; // Set the active modal
    });
});

// Close modal logic when close button is clicked
closeBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        modal[index].classList.remove("open");
        modal[index].classList.add("close");
        activeModal = null; // Reset active modal
    });
});

// Close the modal if clicked outside of it
document.addEventListener("click", (e) => {
    if (activeModal && !activeModal.contains(e.target) && !e.target.classList.contains("open-btn") && !e.target.closest('.modal')) {
        activeModal.classList.remove("open");
        activeModal.classList.add("close");
        activeModal = null; // Reset active modal
    }
});

// Close the modal when the "Esc" key is pressed
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeModal !== null) {
        activeModal.classList.remove("open");
        activeModal.classList.add("close");
        activeModal = null; // Reset active modal
    }
});
