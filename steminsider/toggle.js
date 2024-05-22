var cd = document.getElementById("cd");
var vnl = document.getElementById('vnl');
var cas = document.getElementById('cas');
var main = document.getElementById('main');

function togglecd() {
    cd.style.display = "block";
    main.style.display = "none";
    vnl.style.display = "none";
    cas.style.display = "none";
}

function togglevnl() {
    cd.style.display = "none";
    main.style.display = "none";
    vnl.style.display = "block";
    cas.style.display = "none";
}

function togglecas() {
    cd.style.display = "none";
    main.style.display = "none";
    vnl.style.display = "none";
    cas.style.display = "block";
}

function togglemain() {
    cd.style.display = "none";
    main.style.display = "block";
    vnl.style.display = "none";
    cas.style.display = "none";
}