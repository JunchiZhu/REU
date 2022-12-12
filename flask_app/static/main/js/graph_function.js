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


var table_information;
if (sessionStorage['level'] === 'hard'){
    table_information = hard_table
}
else if(sessionStorage['level'] === 'medium'){
    table_information = medium_table
}
else if(sessionStorage['level'] === 'easy'){
    table_information = easy_table
}


var target_list = []
let list = Object.keys(table_information[0])

for(let i=0;i<list.length; ++i){
    if (sessionStorage.getItem(list[i])!== null){
        target_list.push(sessionStorage.getItem(list[i]))
    }
}

let list_map = []
for (let i = 0; i < table_information.length; i++){
    const temp_map = new Map(Object.entries(table_information[i]));
    list_map.push(temp_map)
}

var nodes = null;
var edges = null;
var network = null;

function draw() {
    ids = []
    labels = []
    for(let i=0;i<target_list.length;++i){
        ids.push(target_list[i])
        labels.push(target_list[i])
    }
    track = {}
    for (let i = 0; i < table_information.length; i++) {
        Object.entries(table_information[i]).forEach(([k,v]) => {
            for(let j = 0; j < target_list.length; j++){
                if(k === 'Team Member' && v === target_list[j]){
                    track[v]=(table_information[i])
                }
            }
        })
    }
    value = []
    from = []
    to = []
    for(let i = 0; i < target_list.length; i++) {
        for(let j = i; j < target_list.length; j++) {
            from.push(target_list[i])
            to.push(target_list[j])
        }
    }
    for(let i = 0; i < from.length; i++) {
        value.push(track[from[i]][to[i]])
    }
    console.log(from)
    console.log(to)
    console.log("value", value)
    console.log(track)

    nodes = []
    for (let i = 0; i<labels.length;++i){
        let node = {id:ids[i], value:4, label:labels[i], font: "30px arial red"};
        nodes.push(node)
    }

    edges = []
    for(let i = 0; i<to.length;++i){
        if (value[i] !== 'n/a'){
            let edge = {from:from[i], to:to[i], value:value[i], title:"communicate "+value[i].toString()+" times", length:600};
            edges.push(edge)
        }
    }
    console.log(edges)
    var container = document.getElementById("mynetwork");
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes: {
            shape: "dot",
            borderWidth: 2,
            scaling: {
                label: {
                    min: 15,
                    max: 20,
                },
            },
        },
    };
    network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
    draw();
});

function back_to_table(){
    location.href = "/table_page";
}

function transferBack(){
    sessionStorage.clear();
    location.href = "/selection_page";
}