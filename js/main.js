// Objeto con las propiedades del slide

var p = {
        paginacion: document.querySelectorAll("#paginacion li"),
        item: 0,
        cajaSlide: document.querySelector("#slide ul")
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
    }
}

m.incioSlide();