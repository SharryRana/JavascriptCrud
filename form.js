var id = 1;
var selectedRow = null;

function onFormSubmit() {
    
    var formdata = forminsert();
    if (selectedRow == null) {

        tabledata(formdata);
        // console.log(formdata);
    } else 
        formupdate(formdata);
    

    document.getElementById('fullname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('address').value = "";
}

function forminsert() {
    var formdata = {};
    formdata['fullname'] = document.getElementById('fullname').value;
    formdata['email'] = document.getElementById('email').value;
    formdata['address'] = document.getElementById('address').value;
    // console.log(formdata);
    return formdata;
}

function formupdate(formdata) {
    selectedRow.cells[1].textContent = formdata.fullname;
    selectedRow.cells[2].textContent = formdata.email;
    selectedRow.cells[3].textContent = formdata.address;
    selectedRow = null;
}

function tabledata(data) {

    var table = document.getElementById('tabledata').getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0).innerHTML = id++;
    cell2 = newrow.insertCell(1).innerHTML = data.fullname;
    cell3 = newrow.insertCell(2).innerHTML = data.email;
    cell4 = newrow.insertCell(3).innerHTML = data.address;
    var formdata = {};
    formdata['fullname'] = data.fullname;
    formdata['email'] = data.email;
    formdata['address'] = data.address;
    let test = JSON.stringify({formdata})
    console.log(test);

    cell5 = newrow.insertCell(4).innerHTML = `<a href="#" onclick="onEdit(this)" class="btn btn-info mb-2">Edit </a><br><a href="#" onclick="onDelete(this)" class="btn btn-danger">Delete</a>`;


}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullname').value = selectedRow.cells[1].textContent;
    document.getElementById('email').value = selectedRow.cells[2].textContent;
    document.getElementById('address').value = selectedRow.cells[3].textContent;


}

function onDelete(td, data) {
    console.log(data);

    if (confirm("Are you sure!")) {
        row = td.parentElement.parentElement;
        document.getElementById('tabledata').deleteRow(row.rowIndex);
        //    tabledata(data)
    }
}
