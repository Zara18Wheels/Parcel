let fileInput = document.getElementById("excelFile");

fileInput.addEventListener("change", function () {
    let file = fileInput.files[0];

    let reader = new FileReader();

    reader.onload = function (event) {

        // Read Excel file
        let data = new Uint8Array(event.target.result);

        // Convert Excel file to workbook
        let workbook = XLSX.read(data, { type: "array" });

        // Get the first sheet
        let sheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[sheetName];

        // Convert sheet to JavaScript data
        let rows = XLSX.utils.sheet_to_json(worksheet);

        // Show the data
        console.log(rows);

        // Example:
        // let weight = rows[0].Weight;
        // let postalCode = rows[0].PostalCode;
        // let carrier = rows[0].Carrier;

        console.log("Excel data loaded successfully!");
    };

    reader.readAsArrayBuffer(file);
});
