window.onload = function () {
  const dialog = document.getElementById("imageDialog");
  const dialogImage = document.getElementById("dialogImage");
  const dialogImageClose = document.getElementById("dialogImageClose");

  let imageClickHandlers = [];

  const setupImageClickEvents = () => {
    document.querySelectorAll(".grid img").forEach((img) => {
      const clickHandler = function () {
        dialogImage.src = this.src.replace("thumbnails", "full"); // Set the dialog image source to the clicked image source
        dialog.showModal(); // Open the dialog
      };
      img.addEventListener("click", clickHandler);
      imageClickHandlers.push({ img, clickHandler });
    });

    dialogImageClose.addEventListener("click", closeDialog);
    dialog.addEventListener("click", closeDialogOnOutsideClick);
  };

  const removeImageClickEvents = () => {
    imageClickHandlers.forEach(({ img, clickHandler }) => {
      img.removeEventListener("click", clickHandler);
    });
    imageClickHandlers = [];

    dialogImageClose.removeEventListener("click", closeDialog);
    dialog.removeEventListener("click", closeDialogOnOutsideClick);
  };

  const closeDialog = () => {
    dialog.close();
    dialogImage.src = ""; // Clear the image source when closing
  };

  const closeDialogOnOutsideClick = (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  };

  const mediaQuery = window.matchMedia("(min-width: 576px)");

  const handleMediaChange = (e) => {
    if (e.matches) {
      setupImageClickEvents();
    } else {
      removeImageClickEvents();
    }
  };

  // Initial check
  if (mediaQuery.matches) {
    setupImageClickEvents();
  }

  // Listen for changes in the media query
  mediaQuery.addEventListener("change", handleMediaChange);
};
