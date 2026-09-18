let fileInput = document.getElementById("excelFile");
fileInput.addEventListener("change", function() {
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
});
