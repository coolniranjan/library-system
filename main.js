// console.log("welcome")
showBook()

//------------- addEventListener--------


let btn = document.getElementById("btn")
btn.addEventListener('click', function (e) {
  let name = document.getElementById("formGroupExampleInput1")
  let adNo = document.getElementById("formGroupExampleInput2")
  let book = document.getElementById("formGroupExampleInput3")

  if (name.value != "" && adNo.value != "" && book.value != "") {

    let data = localStorage.getItem('notes');
    if (data == null) {
      notesObj = []
    }
    else {
      notesObj = JSON.parse(data);
    }

    let obj = {
      id: adNo.value,
      name: name.value,
      book: book.value
    }
    notesObj.push(obj);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    adNo.value = ''
    name.value = ''
    book.value = ''
    showBook()


    //--------- to show successfull event----------

    al = document.getElementById("alert")
    al.innerHTML = `<div class="alert alert-success">
    <strong>Warning!</strong> Successfully added.
    </div>`
    window.setTimeout(function () {
      al.innerHTML = ""
    }, 3000);
  }

  // if we miss any details to fill then show warning--------

  else {
    al = document.getElementById("alert")
    al.innerHTML = `<div class="alert alert-warning">
    <strong>Warning!</strong> Please fill all the details before add.
  </div>`
    window.setTimeout(function () {
      al.innerHTML = ""
    }, 3000);
  }
})

// to get value from local Storage


function showBook() {
  let data = localStorage.getItem('notes');
  if (data == null) {
    notesObj = []
  }
  else {
    notesObj = JSON.parse(data);
  }

  let html = ""
  notesObj.forEach(function (ele, index) {

    html = html + ` <tr>
  <th scope="row">${index + 1}</th>
  <td>${ele.id}</td>
  <td>${ele.name}</td>
  <td>${ele.book}</td>
  <td><button type="button" onclick="deleteNote(${index})" class="btn btn-outline-dark" id=${index}>Delete</button>
  </td>
  </tr>`
  })
  let details = document.getElementById("tbody");

  if (notesObj.length != 0) {
    details.innerHTML = html;
  }
  else {
    details.innerHTML = `<h3>Please add details of book nothing in DataBase....</h3>`
  }


}
// ------------delete----------------


function deleteNote(i) {

  let data = localStorage.getItem('notes');
  if (data == null) {
    notesObj = []
  }
  else {
    notesObj = JSON.parse(data);
  }

  notesObj.splice(i, 1)
  localStorage.setItem("notes", JSON.stringify(notesObj))
  showBook()
}


