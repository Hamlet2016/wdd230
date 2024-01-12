// getdates.js

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del primer párrafo del footer
    var copyrightParagraph = document.querySelector("footer p:first-child");

    // Obtén el elemento del segundo párrafo del footer
    var lastModifiedParagraph = document.getElementById("lastModified");

    // Obtén el año actual
    var currentYear = new Date().getFullYear();

    // Establece el contenido del primer párrafo con el año actual
    copyrightParagraph.innerHTML = "&copy; " + currentYear + " Hamlet Martinez | State or Country Flag";

    // Obtiene la fecha de la última modificación del documento
    var lastModifiedDate = new Date(document.lastModified);

    // Establece el contenido del segundo párrafo con la fecha de última modificación
    lastModifiedParagraph.innerHTML = "Last modified: " + lastModifiedDate;
});
