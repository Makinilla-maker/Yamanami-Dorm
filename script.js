document.addEventListener('DOMContentLoaded', function () {
    var heading = document.getElementById('randomColorText'); // Obtener el elemento

    if (heading) { // Verifica que el elemento existe
        var text = heading.innerText; // Almacenar el texto original
        var newHtml = ''; // Variable para mantener el nuevo HTML

        if (text.length > 0) { // Verifica que el texto no est� vac�o
            // Bucle a trav�s de cada car�cter en el texto original
            for (var i = 0; i < text.length; i++) {
                var color = Math.random() > 0.5 ? 'black' : 'white'; // Elige aleatoriamente negro o blanco
                newHtml += '<span style="color:' + color + ';">' + text[i] + '</span>'; // Envuelve cada car�cter en un span con estilo
            }

            heading.innerHTML = newHtml; // Reemplaza el texto original con el nuevo HTML
        } else {
            console.log("El texto est� vac�o");
        }
    } else {
        console.log("Elemento no encontrado en el documento");
    }
});

