add()
class book {
    constructor(Givenname, GivenadNo, Givenbookname) {
        this.name = Givenname;
        this.adNo = GivenadNo;
        this.bookname = Givenbookname;
    }
}
function add() {
    let data = localStorage.getItem('notes')
    if (data == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(data)
    }
    let html = ''
    notesObj.forEach(function (ele, idx) {
        html = html + ` <tr>
        <th scope="row">${idx + 1}</th>
        <td>${ele.adNo}</td>
        <td>${ele.name}</td>
        <td>${ele.bookname}</td>
        <td><button type="button" onclick="deleteNote(${idx})" class="btn btn-outline-dark" id="${idx}">Delete</button>
        </td>
        </tr>`
    })
    let details = document.getElementById("tbody");
    if(notesObj.length==0){
        details.innerHTML =`<h3>There Is No Any Data Available</h3>`
    }
    else{
        details.innerHTML =html
    }
}
class Display {
    clear() {
        let formdeatils = document.getElementById('formdeatils');
        formdeatils.reset();
    }
    validate(book) {
        if (book.name.length < 1 || book.adNo.length < 1 || book.bookname.length < 1) {
            return false
        }
        else {
            return true
        }
    }
    DisplayMsg(type, message) {
        let al = document.getElementById("alert")
        al.innerHTML = `<div class="alert alert-${type}">
                         <strong>${type}!</strong>${message}.
                         </div>`
        window.setTimeout(function () {
            al.innerHTML = ""
        }, 3000);
    }
}
btn.addEventListener("click", submitform);
function submitform(e) {
    let Givenname = document.getElementById("formGroupExampleInput1").value
    let GivenadNo = document.getElementById("formGroupExampleInput2").value
    let Givenbookname = document.getElementById("formGroupExampleInput3").value
    let obj1 = new book(Givenname, GivenadNo, Givenbookname)
    let obj2 = new Display()
    if (obj2.validate(obj1)) {
        let data = localStorage.getItem('notes')
        if (data == null) {
            notesObj = []
        }
        else {
            notesObj = JSON.parse(data)
        }
        notesObj.push(obj1)
        localStorage.setItem('notes', JSON.stringify(notesObj))
        add()
        obj2.clear()
        obj2.DisplayMsg('success', 'Added successfully')
    }
    else {
        obj2.DisplayMsg('warning', 'fill all the details')
    }

    e.preventDefault();
}



function deleteNote(i){
    let data = localStorage.getItem('notes')
    if (data == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(data)
    }
    notesObj.splice(i,1)
    localStorage.setItem('notes',JSON.stringify(notesObj))
    add()
}