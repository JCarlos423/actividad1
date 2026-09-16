function convertir() {
    var mxn= document.getElementById("mxn").value;

    if (mxn === "" || isNaN(mxn)) {
                alert("Por favor, ingrese un valor numérico válido en grados Celsius.");
                document.getElementById("dlr").value="NaN";
                return; // Detiene la ejecución si no es válido
            }

    var dlr=(parseFloat(mxn)*0.055);
    
    document.getElementById("dlr").value=dlr.toFixed(2);
}