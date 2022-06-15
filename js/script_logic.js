var arrayProyectos = [];
let itemEditar = null;

var botonD = document.getElementById('botonDelete');

botonD.addEventListener('click', function(){
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    
    var itemsEliminar = [];

    for(let i=0; i<checkbox.length; i++){
        itemsEliminar.push(checkbox[i].attributes[1].value);
    }


    for(let i=0; i<itemsEliminar.length; i++){
        var item = parseInt(itemsEliminar[i]);
        if(isNaN(item) == true){
            arrayProyectos = []
        }else{
            arrayProyectos.splice(item, 1);
        }
    }
    document.getElementById("data_body").innerHTML = crearTabla(arrayProyectos);
})

function sendProject(){

    var proyecto = {
        nombreP: "",
        codigoP: 0,
        descripcionP: "",
        fechaInitP: null,
        tipoP: ""
    };

    proyecto.nombreP = document.getElementById("name").value;
    proyecto.codigoP = document.getElementById("codigo").value;
    proyecto.descripcionP = document.getElementById("descripcion").value;
    proyecto.fechaInitP = document.getElementById("date").value;
    proyecto.tipoP = document.getElementById("tipo").value;

    if(proyecto.nombreP.length > 0 && proyecto.codigoP > 0 && proyecto.descripcionP.length > 0){
        arrayProyectos.push(proyecto);
        vaciar();
        alertSucces();
    }else{
        alertFail();
    }

    document.getElementById("data_body").innerHTML = crearTabla(arrayProyectos);
}

function updataProject(){

    var proyecto = {
        nombreP: "",
        codigoP: 0,
        descripcionP: "",
        fechaInitP: null,
        tipoP: ""
    };

    proyecto.nombreP = document.getElementById("nameUp").value;
    proyecto.codigoP = document.getElementById("codigoUp").value;
    proyecto.descripcionP = document.getElementById("descripcionUp").value;
    proyecto.fechaInitP = document.getElementById("dateUp").value;
    proyecto.tipoP = document.getElementById("tipoUp").value;

    if(itemEditar != null){

        arrayProyectos.splice(itemEditar, 1, proyecto);
        document.getElementById("data_body").innerHTML = crearTabla(arrayProyectos);
    }else{
        window.alert("No se ha selecionado ningun proyecto");
    }
}

let crearTabla = function(arrayProyectos){

    let dataTabla = "";

    for(let proyecto of arrayProyectos){

        let fila = "<tr><td class='table-checkbox'><input type='checkbox' value='"
        fila += arrayProyectos.indexOf(proyecto);
        fila += "' id='valorDelete'></td>"
        
        fila += "<td>"
        fila += proyecto.nombreP
        fila += "</td>"

        fila += "<td>"
        fila += proyecto.codigoP
        fila += "</td>"

        fila += "<td>"
        fila += proyecto.descripcionP
        fila += "</td>"

        fila += "<td>"
        fila += proyecto.fechaInitP
        fila += "</td>"

        fila += "<td>"
        fila += proyecto.tipoP
        fila += "</td>"

        fila += "</tr>";
        dataTabla += fila
    }
    return dataTabla;
}

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll("#cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");

    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    
    var itemE = [];

    for(let i=0; i<checkbox.length; i++){
        itemE.push(checkbox[i].attributes[1].value);
    }
        
    if(itemE.length == 1){
        var item = parseInt(itemE[0]);
        console.log(item);
        if(isNaN(item) == false){
            
            for(let i=0; i<arrayProyectos.length; i++){
                if(i == item){
                    document.getElementById("nameUp").value = arrayProyectos[i].nombreP;
                    document.getElementById("codigoUp").value = arrayProyectos[i].codigoP;
                    document.getElementById("descripcionUp").value = arrayProyectos[i].descripcionP;
                    document.getElementById("dateUp").value = arrayProyectos[i].fechaInitP;
                    document.getElementById("tipoUp").value = arrayProyectos[i].tipoP;
                }
            }    

            itemEditar = item;
        }else{
            window.alert("Checkbox no habilitado para esta funcion de editar");
        }
    }else if(itemE.length > 1){

        document.getElementById("nameUp").value = "";
        document.getElementById("codigoUp").value = "";
        document.getElementById("descripcionUp").value = "";
        document.getElementById("dateUp").value = "";
        document.getElementById("tipoUp").value = "";
        itemEditar = null;

        window.alert("Seleccione solo un item para editar");
    }else{

        document.getElementById("nameUp").value = "";
        document.getElementById("codigoUp").value = "";
        document.getElementById("descripcionUp").value = "";
        document.getElementById("dateUp").value = "";
        document.getElementById("tipoUp").value = "";
        itemEditar = null;

        window.alert("Seleccione un item para editar");
    }
})

cerrar.addEventListener("click", function(e) {
    modal.classList.toggle("modal-close");

    setTimeout(function() {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 500)
})

window.addEventListener("click", function(e) {

    if(e.target == modalC){
        modal.classList.toggle("modal-close");

        setTimeout(function() {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 500)
    }
})

window.onkeydown = presionar_tecla;

function presionar_tecla(){
    foundP = []
    tecla_enter = event.keyCode;

    if(tecla_enter == 13){
        ProjectSearch = document.getElementById("searchP").value;

        for(let i=0; i<arrayProyectos.length; i++){
            if(ProjectSearch.toLowerCase() == arrayProyectos[i].nombreP.toLowerCase() || parseInt(ProjectSearch) == arrayProyectos[i].codigoP){
                foundP.push(arrayProyectos[i]);
            }
        }
        document.getElementById("data_body").innerHTML = crearTabla(foundP);
    }

}

function restablecerProject(){
    document.getElementById("data_body").innerHTML = crearTabla(arrayProyectos);
}