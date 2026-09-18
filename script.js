let fileInput = document.getElementById("excelFile");

fileInput.addEventListener("change", function () {

    let file = fileInput.files[0];

    let reader = new FileReader();

    reader.onload = function (event) {

        let data = new Uint8Array(event.target.result);

        let workbook = XLSX.read(data, { type: "array" });

        let sheetName = workbook.SheetNames[0];

        let worksheet = workbook.Sheets[sheetName];

        let rows = XLSX.utils.sheet_to_json(worksheet);

        rows.forEach(function (row) {

            let postalCode = row["Postal code"];
            let weight = row["Weight"];
            let length = row["Length"];
            let height = row["Height"];

            console.log("Postal Code:", postalCode);
            console.log("Weight:", weight);
            console.log("Length:", length);
            console.log("Height:", height);

            // Rate calculation will go here

        });

    };

    reader.readAsArrayBuffer(file);

});
