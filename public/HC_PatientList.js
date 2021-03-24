document.onload = GenerateTable();

function GenerateTable() {
    //Build an array containing testcenter records.
    var patientList = new Array();
    patientList.push(['ABC', "29", "abc@gmail.com"]);
    patientList.push(['RES', "30", "res@gmail.com"]);
    patientList.push(['SIVA', "27", "siva@gmail.com"]);
    patientList.push(['YEN', "25", "yen@gmail.com"]);
    
    //Create a HTML Table element.
    var table = document.getElementById("tbodyid")
    var row = document.createElement("td");

    //Get the count of columns.
    var columnCount = patientList[0].length;
    //Add the data rows.
    for (var i = 0; i < patientList.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {

            var cell = row.insertCell(-1);
            cell.innerHTML = patientList[i][j];

        }
        var r1 = document.createElement('input');
        r1.type = "radio";
        row.appendChild(r1);
        r1.setAttribute("name", "test");
        r1.setAttribute("id", "radiobtn-" + i);
    }

}
var button = document.getElementById("getRadio");
var radios = document.getElementsByTagName("input");

button.onclick = getRadiobtnId;

function getRadiobtnId() {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            var value = radios[i].id;
            console.log(value);
        }
    }
}