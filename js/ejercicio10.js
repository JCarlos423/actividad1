function convertir() {
    var ccc= document.getElementById("ccc").value;

    if (ccc === "" || isNaN(ccc)) {
                alert("Por favor, ingrese un valor numérico válido en grados Celsius.");
                document.getElementById("fff").value="NaN";
                return; // Detiene la ejecución si no es válido
            }

    var fff=(parseFloat(ccc)*9/5)+32;
    
    document.getElementById("fff").value=fff.toFixed(2);
}