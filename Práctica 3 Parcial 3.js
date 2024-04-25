function generarRFC() {
    var nombre = document.getElementById("nombre").value.toUpperCase();
    var apellidoPaterno = document.getElementById("apellidoPaterno").value.toUpperCase();
    var apellidoMaterno = document.getElementById("apellidoMaterno").value.toUpperCase();
    var anioNacimiento = document.getElementById("anioNacimiento").value.slice(-2);
    var mesNacimiento = ("0" + document.getElementById("mesNacimiento").value).slice(-2);
    var diaNacimiento = ("0" + document.getElementById("diaNacimiento").value).slice(-2);

    var rfc = apellidoPaterno.slice(0, 2) + apellidoMaterno.slice(0, 1) + nombre.slice(0, 1) 
    + anioNacimiento + mesNacimiento + diaNacimiento;
    
    document.getElementById("resultado").innerHTML = "Su RFC es: " + rfc;
}

document.getElementById("rfcForm").addEventListener("submit", function(event) {
    event.preventDefault();
    generarRFC();
});
