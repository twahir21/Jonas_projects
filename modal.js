const closeModals = document.querySelectorAll(".fa-x");
const modals = document.querySelectorAll(".modal");
const openButtons = document.querySelectorAll(".open-btn");

// open modals
openButtons.forEach((openButton, index) => {
    openButton.addEventListener("click", () => {
        // Close all modals first
        modals.forEach((modal) => {
            modal.classList.remove("open");
            modal.classList.add("close");
        });

        // Open the clicked modal
        modals[index].classList.add("open");
        modals[index].classList.remove("close");
    });
});

// close modals
closeModals.forEach((closeModal, index) => {
    closeModal.addEventListener("click", () => {
        modals[index].classList.add("close");
        modals[index].classList.remove("open");
    });
});
