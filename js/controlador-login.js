function validar() {
    if ((validacion("id_userLoginId") || validacion("id_userPassword")) && (validacion("id_userLoginId") && validacion("id_userPassword"))) {
        alert("serás redireccionado");
    } else {
        alert("No redireccion");
    }
}

function validacion(id) {
    if ($("#" + id).val() == "") {
        $("#" + id).addClass("is-invalid");
        return false;
    } else {
        $("#" + id).removeClass("is-invalid");
        return true;
    }
}

function validarCorreo() {
    if
}