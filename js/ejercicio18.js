// Selección de elementos del DOM
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
  const texto = input.value.trim();

  if (texto !== '') {
    // 1. Crear el elemento 'li' con clases de Bootstrap
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    // 2. Crear un contenedor span para el texto
    const spanTexto = document.createElement('span');
    spanTexto.textContent = texto;
    li.appendChild(spanTexto);

    // 3. Crear el botón de eliminar estilizado con Bootstrap
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'btn btn-sm btn-outline-danger';
    
    // Evento para remover el nodo al presionar eliminar
    botonEliminar.addEventListener('click', function () {
      li.remove();
    });

    li.appendChild(botonEliminar);

    // 4. Agregar a la lista y limpiar el campo
    lista.appendChild(li);
    input.value = '';
    input.focus();
  } else {
    alert('Escribe algo antes de agregarlo a la lista.');
  }
}

// Evento al hacer clic en el botón
botonAgregar.addEventListener('click', agregarElemento);

// Opcional: permitir agregar presionando Enter en el input
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    agregarElemento();
  }
});