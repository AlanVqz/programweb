function generarTabla() {
    var numero = prompt("Por favor, introduce un número para generar la tabla de multiplicar:");

    if (numero !== null) { 
        numero = parseInt(numero);

        var tablaHTML = "<h2>Tabla de Multiplicar del " + numero + "</h2><table>";

        for (var i = 1; i <= 10; i++) {
            tablaHTML += "<tr><td>" + numero + " x " + i + "</td><td>=</td><td>" + (numero * i) + "</td></tr>";
        }

        tablaHTML += "</table>";

        document.getElementById("tablaContainer").innerHTML = tablaHTML;
    }
}
