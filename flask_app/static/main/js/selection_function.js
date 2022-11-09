function myFunc() {
    return info
}
table_information = myFunc()
var easy_check = document.getElementById("easy")
var medium_check = document.getElementById("medium")
var hard_check = document.getElementById("hard")
if(easy_check.checked===true){
    table_information = table_information.slice(0,5)
    console.log(table_information)
}
else if(medium_check.checked===true){
    table_information = table_information.slice(0,10)
}

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

window.onload = function(){
    selection_display()
}

const select_form = document.getElementById("selection_container");
let list = Object.keys(table_information[0])
var list_size = list.length;

function selection_display() {
    for (let i = 1; i < list_size; i++){
        var Box = document.createElement("input");
        Box.type = "checkbox";
        Box.name = list[i].toString()
        Box.value = list[i].toString()
        Box.id = list[i].toString()

        var label = document.createElement('label');
        label.htmlFor = "id";
        label.appendChild(document.createTextNode((list[i].toString())));

        Box.classList.add("Box");
        select_form.appendChild(Box);
        select_form.appendChild(label);
    }
}

function transferBack(){
    sessionStorage.clear();
    location.href = "/selection_page";
}
function finish_selection() {
    for(let i=1;i<list_size; ++i){
        let check_box_check = document.getElementById(list[i]);
        if (check_box_check.checked){
            sessionStorage.setItem(list[i], list[i]);
        }
    }
    if(sessionStorage.length>0){
        location.href = "/table_page";
    }
}

