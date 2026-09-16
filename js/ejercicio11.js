function convertir() {
    var km= document.getElementById("km").value;

    if (km === "" || isNaN(km)) {
                alert("Por favor, ingrese un valor numérico válido en grados Celsius.");
                document.getElementById("mill").value="NaN";
                return; // Detiene la ejecución si no es válido
            }

    var mill=(parseFloat(km)*0.621371);
    
    document.getElementById("mill").value=mill.toFixed(3);
}