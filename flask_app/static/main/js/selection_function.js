function easylevel() {
    return level1
}
function mediumlevel() {
    return level2
}
function hardlevel() {
    return level3
}
easy_table = easylevel()
medium_table = mediumlevel()
hard_table = hardlevel()
var easy_list = Object.keys(easy_table[0])
var medium_list = Object.keys(medium_table[0])
var hard_list = Object.keys(hard_table[0])
let easy_radio = document.getElementById("radio_easy")
let medium_radio = document.getElementById("radio_medium")
let hard_radio = document.getElementById("radio_hard")


window.onload = function(){
    selection_display1(easy_table, easy_list)
    selection_display2(medium_table, medium_list)
    selection_display3(hard_table, hard_list)
}

if(easy_radio.checked){
    document.getElementById("level1_display").classList.remove("hide");
}

function level1Mode() {
    document.getElementById("level1_display").classList.remove("hide");
    document.getElementById("level2_display").classList.add("hide");
    document.getElementById("level3_display").classList.add("hide");
}

function level2Mode() {
    document.getElementById("level1_display").classList.add("hide");
    document.getElementById("level2_display").classList.remove("hide");
    document.getElementById("level3_display").classList.add("hide");
}

function level3Mode() {
    document.getElementById("level1_display").classList.add("hide");
    document.getElementById("level2_display").classList.add("hide");
    document.getElementById("level3_display").classList.remove("hide");
}


function selection_display1(easy_table, easy_list) {
    console.log((easy_list))
    let select_form = document.getElementById("selection_container1")
    var list_size = easy_list.length;
    for (let i = 0; i < list_size-1; i++){
        var container = document.createElement("span");
        var Box = document.createElement("input");
        Box.type = "checkbox";
        Box.name = easy_list[i].toString()
        Box.value = easy_list[i].toString()
        Box.id = easy_list[i].toString()

        var label = document.createElement('label');
        label.htmlFor = "id";
        label.classList.add("hovertext")
        label.appendChild(document.createTextNode((easy_list[i].toString())));
        var description = "description: " + easy_list[i].toString()
        label.setAttribute("data-hover", description)
        Box.classList.add("Box");
        container.appendChild(label);
        container.appendChild(Box);
        select_form.appendChild(container);
    }
}

function selection_display2(medium_table, medium_list) {
    let select_form = document.getElementById("selection_container2")
    var list_size = medium_list.length;
    for (let i = 0; i < list_size-1; i++){
        var container = document.createElement("span");
        var Box = document.createElement("input");
        Box.type = "checkbox";
        Box.name = medium_list[i].toString()+" medium"
        Box.value = medium_list[i].toString()+" medium"
        Box.id = medium_list[i].toString()+" medium"

        var label = document.createElement('label');
        label.htmlFor = "id";
        label.classList.add("hovertext")

        var description = "description: " + medium_list[i].toString()
        label.setAttribute("data-hover", description)
        label.appendChild(document.createTextNode((medium_list[i].toString())));

        Box.classList.add("Box");
        container.appendChild(label);
        container.appendChild(Box);
        select_form.appendChild(container);
    }
}

function selection_display3(hard_table, hard_list) {
    console.log((hard_list))
    let select_form = document.getElementById("selection_container3")
    var list_size = hard_list.length;
    for (let i = 0; i < list_size; i++){
        if(i !== 20) {
            var container = document.createElement("span");
            var Box = document.createElement("input");
            Box.type = "checkbox";
            Box.name = hard_list[i].toString() + " hard"
            Box.value = hard_list[i].toString() + " hard"
            Box.id = hard_list[i].toString() + " hard"

            var label = document.createElement('label');
            label.htmlFor = "id";
            label.appendChild(document.createTextNode((hard_list[i].toString())));
            label.classList.add("hovertext")
            var description = "description: " + hard_list[i].toString()
            label.setAttribute("data-hover", description)
            Box.classList.add("Box");
            container.appendChild(label);
            container.appendChild(Box);
            select_form.appendChild(container);
        }
    }
}

function transferBack(){
    sessionStorage.clear();
    location.href = "/selection_page";
}


function finish_selection() {
    if (easy_radio.checked === true){
        sessionStorage.setItem("level","easy");
        for(let i=0;i<easy_list.length-1; ++i){
            let check_box_check = document.getElementById(easy_list[i]);
            if (check_box_check.checked){
                sessionStorage.setItem(easy_list[i],easy_list[i]);
            }
        }
    }
    else if (medium_radio.checked === true){
        sessionStorage.setItem("level","medium");
        for(let i=0;i<medium_list.length-1; ++i){
            let check_box_check = document.getElementById(medium_list[i]+" medium");
            if (check_box_check.checked){
                sessionStorage.setItem(medium_list[i],medium_list[i]);
            }
        }
    }
    else if (hard_radio.checked === true){
        sessionStorage.setItem("level","hard");
        for(let i=0;i<hard_list.length; ++i){
            if(i !== 20){
                let check_box_check = document.getElementById(hard_list[i]+" hard");
                if (check_box_check.checked){
                    sessionStorage.setItem(hard_list[i],hard_list[i]);
                }
            }
        }
    }

    if(sessionStorage.length>0){
        location.href = "/table_page";
    }
}

function hover_over(){

}


var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

console.log(sessionStorage)