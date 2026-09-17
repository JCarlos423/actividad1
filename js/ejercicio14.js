function validar(){
    let cadena=document.getElementById("entrada").value;
    let arreglo=cadena.split(",");
    let numeros=arreglo.map(Number);
    let maximo= Math.max(...numeros);
    let minimo= Math.min(...numeros);
    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let promedio=suma/numeros.length;
    document.getElementById("mayor").value=maximo;
    document.getElementById("menor").value=minimo;
    document.getElementById("promedio").value=promedio;
}