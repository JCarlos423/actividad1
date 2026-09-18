const manejarTareas = () => {
                let tareas = [];
                const claveStorage = 'ejercicio17_tareas';

                const guardarTareas = () => {
                    localStorage.setItem(claveStorage, JSON.stringify(tareas));
                };

                const cargarTareas = () => {
                    const tareasGuardadas = localStorage.getItem(claveStorage);

                    if (!tareasGuardadas) {
                        return;
                    }

                    try {
                        const tareasParseadas = JSON.parse(tareasGuardadas);
                        tareas = Array.isArray(tareasParseadas) ? tareasParseadas : [];
                    } catch (error) {
                        tareas = [];
                        localStorage.removeItem(claveStorage);
                    }
                };

                const agregarTarea = texto => {
                    tareas.push({
                        id: crypto.randomUUID(),
                        texto,
                        completada: false
                    });
                    guardarTareas();
                };

                const eliminarTarea = id => {
                    tareas = tareas.filter(tarea => tarea.id !== id);
                    guardarTareas();
                };

                const obtenerTareas = () => [...tareas];

                cargarTareas();

                return { agregarTarea, eliminarTarea, obtenerTareas };
            };

            const gestor = manejarTareas();
            const formulario = document.getElementById('formulario-tarea');
            const entradaTarea = document.getElementById('tarea');
            const listaTareas = document.getElementById('lista-tareas');
            const listaVacia = document.getElementById('lista-vacia');

            const mostrarError = mensaje => {
                Swal.fire({
                    icon: 'error',
                    title: 'Tarea no válida',
                    text: mensaje,
                    confirmButtonText: 'Aceptar'
                });
            };

            const confirmarEliminacion = id => {
                Swal.fire({
                    icon: 'warning',
                    title: '¿Eliminar tarea?',
                    text: 'Esta acción no se puede deshacer.',
                    showCancelButton: true,
                    confirmButtonText: 'Sí, eliminar',
                    cancelButtonText: 'Cancelar'
                }).then(({ isConfirmed }) => {
                    if (isConfirmed) {
                        gestor.eliminarTarea(id);
                        renderizarTareas();
                    }
                });
            };

            const renderizarTareas = () => {
                const tareas = gestor.obtenerTareas();
                listaTareas.replaceChildren();
                listaVacia.hidden = tareas.length > 0;

                tareas.forEach(tarea => {
                    const elemento = document.createElement('li');
                    elemento.className = 'tarea';

                    const texto = document.createElement('span');
                    texto.textContent = tarea.texto;

                    const botonEliminar = document.createElement('button');
                    botonEliminar.type = 'button';
                    botonEliminar.textContent = 'Eliminar';
                    botonEliminar.classList.add('btneliminar');
                    botonEliminar.addEventListener('click', () => confirmarEliminacion(tarea.id));

                    elemento.append(texto, botonEliminar);
                    listaTareas.appendChild(elemento);
                });
            };

            formulario.addEventListener('submit', event => {
                event.preventDefault();
                const texto = entradaTarea.value.trim();

                if (!texto) {
                    mostrarError('Escribe una tarea antes de agregarla.');
                    return;
                }

                gestor.agregarTarea(texto);
                entradaTarea.value = '';
                renderizarTareas();
                entradaTarea.focus();
            });
renderizarTareas();