const firebaseConfig = {
    apiKey: "AIzaSyB1xnentx3hkJvoGgWGa6yQRV2OasPS9ns",
    authDomain: "todo-app-7bda6.firebaseapp.com",
    databaseURL: "https://todo-app-7bda6-default-rtdb.firebaseio.com",
    projectId: "todo-app-7bda6",
    storageBucket: "todo-app-7bda6.firebasestorage.app",
    messagingSenderId: "990142223443",
    appId: "1:990142223443:web:88f8a6f0e9441b958362a6"
};

var app = firebase.initializeApp(firebaseConfig);
console.log(app);

var ulElement = document.getElementById("List");

firebase.database().ref("todos").on("child_added", (data) => {

    var liElement = document.createElement("li");

    var liText = document.createTextNode(data.val().value);

    liElement.appendChild(liText);

    ulElement.appendChild(liElement);

    // delete button Create

    var deleteBtncreate = document.createElement("button");

    var btnText = document.createTextNode("Delete");

    deleteBtncreate.appendChild(btnText);

    liElement.append(deleteBtncreate)

    deleteBtncreate.setAttribute("onclick", "deleteSingleitem(this)");

    deleteBtncreate.setAttribute("id", data.val().key)

    // Edit Button Create

    var editBtncreate = document.createElement("button");

    var btnText = document.createTextNode("Edit");

    editBtncreate.appendChild(btnText);

    liElement.append(editBtncreate)

    editBtncreate.setAttribute("onclick", "edititem(this)");

    editBtncreate.setAttribute("id", data.val().key)

})

function addItem() {

    var todoInput = document.getElementById("addInput");

    var key = firebase.database().ref("todos").push().key;

    var userObj = {
        value: todoInput.value,
        key: key,
    }

    firebase.database().ref("todos").child(key).set(userObj);
}
function allDelete() {

    var ulElement = document.getElementById("List");

    ulElement.innerHTML = "";

    firebase.database().ref("todos").remove()
}
function deleteSingleitem(e) {

    firebase.database().ref("todos").child(e.id).remove()
    e.parentNode.remove();

}

function edititem(e) {

    var opdateVal = prompt("Enter Update Value...");

    var edit = {
        value: opdateVal,
        key: e.id,
    }

    firebase.database().ref("todos").child(e.id).set(edit)

    e.parentNode.firstChild.nodeValue = opdateVal;

}