function addUser() {
  var name = document.getElementById("name").value;
  var profession = document.getElementById("profession").value;
  var age = document.getElementById("age").value;

  if (!name || !profession || !age) {
    document.getElementById("error").innerHTML =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
    return;
  }

  var table = document.getElementById("userTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML ="Name: "+ name;
  cell2.innerHTML ="Profession: " + profession;
  cell3.innerHTML = "Age: "+ age;
  cell4.innerHTML =
    '<button type="button" onclick="deleteRow(this)">Delete</button>';

  document.getElementById("error").style.display = "none";
  document.getElementById("success").innerHTML = "Success : Employee Added!";
  document.getElementById("success").style.display = "block";
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
