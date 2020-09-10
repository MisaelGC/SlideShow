// Objeto con las propiedades del slide

var p = {
        paginacion: document.querySelectorAll("#paginacion li"),
        item: 0,
        cajaSlide: document.querySelector("#slide ul"),
        animacionSlide: "fade",
        imgSlide: document.querySelectorAll("#slide ul li")
    }
    // Objecto con los metódos del slide

var m = {
    incioSlide: function() {
        for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
        }
    },

    paginacionSlide: function(item) {
        p.item = item.target.parentNode.getAttribute("item") - 1;
        m.movimientoSlide(p.item);
    },

    movimientoSlide: function(item) {
        p.cajaSlide.style.left = item * -100 + "%";
        for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].style.opacity = .5;
        }
        p.paginacion[item].style.opacity = 1;
        if (p.animacionSlide == "slide") {
            p.cajaSlide.style.transition = "1s left ease-in-out";
        }
        if (p.animacionSlide == "fade") {
            p.imgSlide[item].style.opacity = 0;
            p.imgSlide[item].style.transition = "1s opacity ease-in-out";
            setTimeout(function() {
                p.imgSlide[item].style.opacity = 1;
            }, 500);
        }
    }
}

m.incioSlide();