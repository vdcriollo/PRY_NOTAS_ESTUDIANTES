function guardarNota(arg){
    // obtenr el value de nuestro textarea
    const nota = document.getElementById("nota").value;
    
    // guardar la nota en el localStorage
    localStorage.setItem("miNota", nota);

    // mostrar un mensaje de confirmación
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Nota guardada correctamente.";
}


// mostrar la nota guardada al cargar la página
window.onload = function() {
    // obtener la nota del localStorage
    const notaGuardada = localStorage.getItem("miNota");
    // si hay una nota guardada, mostrarla en el textarea
    if (notaGuardada) {
        document.getElementById("nota").value = notaGuardada;
    }
}