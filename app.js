let variable = document.querySelector("myForm"); 

function createerrorMessage() {
    let Name = document.querySelector("Name").value;
    let Surname = document.querySelector("Surname").value; 
    let Message = document.querySelector("Message").value; 

    if (Name === "" || Surname === "" || Message === "") {
        document.getElementById("errorMessage").style.display = "block";
        console.log("errorMessage");
    } else {
        createComment(Name, Surname, Message);
        document.getElementById("errorMessage").style.display = "none";
    }
};

function createComment(Name, Surname, Message) {
    let myComment = document.querySelector("myComment");
    let newDiv = document.createElement("div");

    newDiv.innerHTML = '${Name}, ${Surname}, ${Message}';

    myComment.appendChild(nouvelleDiv);
}