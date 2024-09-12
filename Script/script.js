function mudarback () {
    var back = document.getElementById("corpo").style.backgroundImage = 'url("img/pexels-johannes2.jpg")';
}

function voltarback () {
    var back = document.getElementById("corpo").style.backgroundImage = 'url("img/pexels-sr-solo-2917871.jpg")';
}

function alternarback () {
    var perfil = document.getElementById("perfil");
    
    var back = document.getElementById("corpo").style.backgroundImage = 'url("img/pexels-johannes2.jpg")';
    perfil.setAttribute("onclick", "alternarback2(this)");
    perfil.setAttribute("onmouseover", "voltarback(this)");
    perfil.setAttribute("onmouseout", "mudarback(this)");
}

function alternarback2 () {
    var perfil = document.getElementById("perfil");
    var back = document.getElementById("corpo").style.backgroundImage = 'url("img/pexels-sr-solo-2917871.jpg")';
    perfil.setAttribute("onclick", "alternarback(this)");
    perfil.setAttribute("onmouseover", "mudarback(this)");
    perfil.setAttribute("onmouseout", "voltarback(this)");
    
}