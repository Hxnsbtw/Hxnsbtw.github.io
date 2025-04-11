// Variables globales
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

// Elementos del DOM
const tareaInput = document.getElementById('tareaInput');
const fechaInput = document.getElementById('fechaInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');

// Establecer la fecha de hoy como predeterminada
fechaInput.valueAsDate = new Date();

// Función para renderizar tareas
function renderizarTareas() {
    listaTareas.innerHTML = '';
    
    if (tareas.length === 0) {
        listaTareas.innerHTML = '<div style="text-align: center; padding: 20px; color: #888;">No hay tareas pendientes. ¡Añade una nueva!</div>';
        return;
    }
    
    tareas.forEach((tarea, index) => {
        const tareaDiv = document.createElement('div');
        tareaDiv.className = `tarea-item ${tarea.completada ? 'completada' : ''}`;
        
        tareaDiv.innerHTML = `
            <span class="texto-tarea">${tarea.texto}</span>
            <span class="fecha"><i class="far fa-calendar-alt"></i> ${new Date(tarea.fecha).toLocaleDateString()}</span>
            <div class="tarea-actions">
                <button class="btn-eliminar" onclick="eliminarTarea(${index})"><i class="fas fa-trash"></i></button>
                <button class="${tarea.completada ? 'btn-desmarcar' : 'btn-completar'}" onclick="toggleCompletada(${index})">
                    ${tarea.completada ? '<i class="fas fa-times"></i>' : '<i class="fas fa-check"></i>'}
                </button>
            </div>
        `;
        listaTareas.appendChild(tareaDiv);
    });
}

// Función para editar tareas
function habilitarEdicion() {
    listaTareas.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('texto-tarea')) {
            const tareaDiv = e.target.closest('.tarea-item');
            const index = Array.from(listaTareas.children).indexOf(tareaDiv);
           
            // Mostrar modal o usar prompt para mejor UX
            const nuevoTexto = prompt('Editar tarea:', tareas[index].texto);
            const nuevaFecha = prompt('Editar fecha (YYYY-MM-DD):', tareas[index].fecha);
 
            if (nuevoTexto !== null && nuevoTexto.trim() !== '' && nuevaFecha !== null && nuevaFecha.trim()) {
                tareas[index].texto = nuevoTexto.trim();
                tareas[index].fecha = nuevaFecha.trim();
                guardarEnLocalStorage();
                renderizarTareas();
            }
        }
    });
}

// Evento para agregar tarea
agregarBtn.addEventListener('click', agregarTarea);
tareaInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

function agregarTarea() {
    const texto = tareaInput.value.trim();
    const fecha = fechaInput.value || new Date().toISOString().split('T')[0];
    
    if (texto) {
        tareas.push({ 
            texto, 
            fecha,
            completada: false 
        });
        tareaInput.value = '';
        // Dejar la fecha como está para facilitar la entrada de múltiples tareas
        guardarEnLocalStorage();
        renderizarTareas();
    }
}

//función tarea completa
window.toggleCompletada = (index) => {
    tareas[index].completada = !tareas[index].completada;
    guardarEnLocalStorage();
    renderizarTareas();
};

// Funciones globales
window.eliminarTarea = (index) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
        tareas.splice(index, 1);
        guardarEnLocalStorage();
        renderizarTareas();
    }
};

// Ordenar tareas por fecha
function ordenarTareas() {
    tareas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    guardarEnLocalStorage();
    renderizarTareas();
}

// Guardar en localStorage
function guardarEnLocalStorage() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Inicialización
renderizarTareas();
habilitarEdicion();