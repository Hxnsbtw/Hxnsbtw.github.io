
// Variables globales
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

// Elementos del DOM
const tareaInput = document.getElementById('tareaInput');
const fechaInput = document.getElementById('fechaInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');

// Función para renderizar tareas
function renderizarTareas() {
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, index) => {
        const tareaDiv = document.createElement('div');
        tareaDiv.className = `tarea-item ${tarea.completada ? 'completada' : ''}`;
        tareaDiv.innerHTML = `
            <span>${tarea.texto}</span>
            <span class="fecha">${new Date(tarea.fecha).toLocaleDateString()}</span>
            <button onclick="eliminarTarea(${index})">🗑️</button>
            <button onclick="toggleCompletada(${index})">${tarea.completada ? '❌' : '✓'}</button>
            `;
        listaTareas.appendChild(tareaDiv);
    });
}

// Función para editar tareas
function habilitarEdicion() {
    listaTareas.addEventListener('dblclick', (e) => {
        if (e.target.tagName === 'SPAN') {
            const tareaDiv = e.target.parentElement;
            const index = Array.from(listaTareas.children).indexOf(tareaDiv);
           
            // Editar texto
            const nuevoTexto = prompt('Editar tarea:', tareas[index].texto);
            // Editar fecha
            const nuevaFecha = prompt('Editar fecha (YYYY-MM-DD):', tareas[index].fecha);
 
            if (nuevoTexto !== null && nuevoTexto.trim() !== '' && nuevaFecha !== null && nuevaFecha.trim()) {
                tareas[index].texto = nuevoTexto.trim();
                tareas[index].fecha = nuevaFecha.trim();
                renderizarTareas();
            }
        }
    });
}

// Evento para agregar tarea
agregarBtn.addEventListener('click', () => {
    const texto = tareaInput.value.trim();
    const fecha = fechaInput.value || new Date().toISOString().split('T')[0];
    
    if (texto) {
        tareas.push({ 
            texto, 
            fecha,
            completada: false 
        });
        tareaInput.value = '';
        fechaInput.value = '';
        renderizarTareas();
    }
});
//funcion tarea completa

window.toggleCompletada = (index) => {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
};

// Funciones globales
window.eliminarTarea = (index) => {
    tareas.splice(index, 1);
    renderizarTareas();
};


// Inicialización
renderizarTareas();
habilitarEdicion();
