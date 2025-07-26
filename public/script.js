window.onload = function () {
  const dialog = document.getElementById("imageDialog");
  const dialogImage = document.getElementById("dialogImage");
  const dialogImageClose = document.getElementById("dialogImageClose");

  // Add click event to each image
  document.querySelectorAll(".grid img").forEach((img) => {
    img.addEventListener("click", function () {
      dialogImage.src = this.src.replace("thumbnails", "full"); // Set the dialog image source to the clicked image source
      dialog.showModal(); // Open the dialog
    });
  });

  dialogImageClose.addEventListener("click", function () {
    dialog.close();
    dialogImage.src = ""; // Clear the image source when closing
  });

  // Close the dialog when clicking outside the image
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
      dialogImage.src = ""; // Clear the image source when closing
    }
  });
};
