// Función auxiliar para leer y validar los inputs numéricos
function obtenerNumeros() {
    const val1 = document.getElementById("num1").value;
    const val2 = document.getElementById("num2").value;

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    return { num1, num2, esValido: !isNaN(num1) && !isNaN(num2) };
}

// Función auxiliar para mostrar el resultado en la caja de texto
function mostrarResultado(valor) {
    document.getElementById("resultado").value = valor;
}

// Operaciones
function suma() {
    const { num1, num2, esValido } = obtenerNumeros();
    if (!esValido) return mostrarResultado("Ingresa ambos números");

    const sumar = (a, b) => a + b;
    mostrarResultado(sumar(num1, num2));
}

function resta() {
    const { num1, num2, esValido } = obtenerNumeros();
    if (!esValido) return mostrarResultado("Ingresa ambos números");

    const restar = (a, b) => a - b;
    mostrarResultado(restar(num1, num2));
}

function mult() {
    const { num1, num2, esValido } = obtenerNumeros();
    if (!esValido) return mostrarResultado("Ingresa ambos números");

    const multiplicar = (a, b) => a * b;
    mostrarResultado(multiplicar(num1, num2));
}

function div() {
    const { num1, num2, esValido } = obtenerNumeros();
    if (!esValido) return mostrarResultado("Ingresa ambos números");

    const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';
    mostrarResultado(dividir(num1, num2));
}