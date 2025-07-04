
const form = document.getElementById("notaForm");
const lista = document.getElementById("listaEstudiantes");


form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('txt_estudiante').value;
    const asignatura = document.getElementById('txt_asignatura').value;
    const nota = document.getElementById('txt_nota').value;

    const nuevoEstudiante={nombre,asignatura,nota};
    
    const datos = JSON.parse(localStorage.getItem('estudiantes')) || [];

    datos.push(nuevoEstudiante);

    localStorage.setItem('estudiantes', JSON.stringify(datos) );

    cargarDatos();
    
    form.reset();

});

function cargarDatos(){
    const datos = JSON.parse(localStorage.getItem('estudiantes')) || [];

    lista.innerHTML="";

    datos.forEach(estudiante => {
        const li = document.createElement('li');
        li.innerHTML = estudiante.nombre + " - " +estudiante.asignatura + " - " +estudiante.nota;
        lista.appendChild(li);
    });
    
}

window.addEventListener('load',cargarDatos);

