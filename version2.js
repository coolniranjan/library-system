
class book {
    constructor(Givenname, GivenadNo, Givenbookname) {
        this.name = Givenname;
        this.adNo = GivenadNo;
        this.bookname = Givenbookname;
    }
}
let html = ''
class Display {
    add(book) {

        html = html + ` <tr>
        <th scope="row">1</th>
        <td>${book.adNo}</td>
        <td>${book.name}</td>
        <td>${book.bookname}</td>
        <td><button type="button" onclick="deleteNote()" class="btn btn-outline-dark" id=>Delete</button>
        </td>
        </tr>`
        let details = document.getElementById("tbody");
        details.innerHTML = html;

    }
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

let data = localStorage.getItem('notes')
if (data == null) {
    notesObj = []
}
else {
    notesObj = JSON.parse(data)
}


btn.addEventListener("click", submitform);
function submitform(e) {
    console.log("submited")
    let Givenname = document.getElementById("formGroupExampleInput1").value
    let GivenadNo = document.getElementById("formGroupExampleInput2").value
    let Givenbookname = document.getElementById("formGroupExampleInput3").value
    let obj1 = new book(Givenname, GivenadNo, Givenbookname)

    let data = localStorage.getItem('notes')
    if (data == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(data)
    }
    notesObj.push(obj1)
    // console.log(notesObj)

    localStorage.setItem('notes', JSON.stringify(notesObj))

    let obj2 = new Display()
    // if (obj2.validate(obj1)) {
    notesObj.forEach(function (ele, idx) {
        obj2.add(ele)
    })
    obj2.clear()
    //     obj2.DisplayMsg('success','Added successfully')
    // }
    // else {
    //     obj2.DisplayMsg('warning','please fill all details corretlly')
    // }
    e.preventDefault();
}

