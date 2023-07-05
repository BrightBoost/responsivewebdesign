function changeColorHeading() {
    document.getElementById("heading").style.color = "red";
}

function revertColorHeading() {
    document.getElementById("heading").style.color = "blue";
}

// bonus
function toggleColorHeading() {
    let currentColor = document.getElementById("heading").style.color;
    if(currentColor == "blue") {
        document.getElementById("heading").style.color = "red";
    } else {
        document.getElementById("heading").style.color = "blue";
    }
}