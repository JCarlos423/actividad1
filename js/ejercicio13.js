function validar(){
    var edad=document.getElementById("edad").value;
    if (edad === ""||isNaN(edad)){
        alert("Por favor, ingrese un valor numérico válido en grados Celsius.");
        document.getElementById("res").value="NaN";
        return; 
    }
    if (edad>=18){
        document.getElementById("res").value="Puedes Votar";
    }
    else{
        document.getElementById("res").value="No Puedes Votar";
    }
}