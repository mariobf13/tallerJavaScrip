function showReg(){
    document.getElementById("reg_proyecto").style.display = 'flex';
    document.getElementById("list_proyectos").style.display = 'none';
}

function showList(){
    document.getElementById("reg_proyecto").style.display = 'none';
    document.getElementById("list_proyectos").style.display = 'flex';
}

function vaciar(){
    document.getElementById("name").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("descripcion").value = "";
}

function alertFail(){
    document.getElementById("alert_fail").style.display = 'block';
    document.getElementById("alert_sucess").style.display = 'none';
}

function closeAlertFail(){
    document.getElementById("alert_fail").style.display = 'none';
}

function alertSucces(){
    document.getElementById("alert_sucess").style.display = 'block';
    document.getElementById("alert_fail").style.display = 'none';
}

function closeAlertSucess(){
    document.getElementById("alert_sucess").style.display = 'none';
}