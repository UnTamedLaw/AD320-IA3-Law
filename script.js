/**
 * Manipulate html with 5 DOM EVENTS!
 */

document.getElementById("wrapper").addEventListener("dblclick", change );
document.getElementById("table").addEventListener("click", add);
document.getElementById("lists").addEventListener("mouseover", mouseover);
document.getElementById("forms").addEventListener("mouseenter", laugh);
document.getElementById("forms").addEventListener("mouseleave", cry);
document.getElementById("description").addEventListener("mouseenter", pout);

document.getElementById("description").addEventListener("mouseleave", dance);

function change(hi) {
    document.getElementById("hello").innerHTML ="bye";

}

function add(hi) {
    var table=document.getElementById("first");
    var row = table.insertRow(1);
    var cell1= row.insertCell(0);
    cell1.innerHTML = "Stop clicking";
}

function mouseover(hi) {
        var x = hi.clientX;
        var y = hi.clientY;
        var coor = "Coordinates: (" + x + "," + y + ")";
        document.getElementById("demo").innerHTML = coor;
    }

function laugh(hi) {
    document.getElementById("ha").style.color= "red";
}

function cry(hi) {
    document.getElementById("ha").style.color= "black";
}

function dance(hi) {
    document.getElementById("nice").style.color = "blue";
}
function pout(hi) {
    document.getElementById("nice").style.color = "black";

}