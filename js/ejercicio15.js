// Arreglo para almacenar los objetos de tipo estudiante[cite: 1]
let estudiantes = [];

// Función para registrar un nuevo estudiante
function registrar() {
    const inputNombre = document.getElementById('nombre');
    const inputCalificacion = document.getElementById('cal');

    const nombre = inputNombre.value.trim();
    const calificacion = parseFloat(inputCalificacion.value.trim());

    // Validar que los campos no estén vacíos y que la calificación sea numérica[cite: 1]
    if (nombre === '') {
        alert('Por favor, ingresa el nombre del estudiante.');
        return;
    }

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        alert('Por favor, ingresa una calificación válida (número entre 0 y 100).');
        return;
    }

    // Creación del objeto estudiante[cite: 1]
    const estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    // Almacenar el objeto en el arreglo[cite: 1]
    estudiantes.push(estudiante);

    // Limpiar cajas de texto
    inputNombre.value = '';
    inputCalificacion.value = '';

    alert(`Estudiante "${nombre}" agregado correctamente.`);
}

// Función para calcular resultados al presionar "Calcular"
function validar() {
    if (estudiantes.length === 0) {
        alert('Agrega al menos un estudiante antes de calcular.');
        return;
    }

    // 1. Cálculo del promedio usando reduce()[cite: 1]
    const sumaTotal = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    const promedio = sumaTotal / estudiantes.length;

    // 2. Obtención de calificación máxima y mínima con Math.max / Math.min y el operador spread (...)[cite: 1]
    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    // 3. Busqueda del estudiante correspondiente[cite: 1]
    const estudianteMayor = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const estudianteMenor = estudiantes.find(e => e.calificacion === calificacionMinima);

    // Despliegue de resultados en cajas de texto readonly[cite: 1]
    document.getElementById('mayor').value = estudianteMayor.nombre;
    document.getElementById('menor').value = estudianteMenor.nombre;
    document.getElementById('promedio').value = promedio.toFixed(2);
}