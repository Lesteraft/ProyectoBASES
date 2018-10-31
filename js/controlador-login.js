function validar() {
    if ((validacion("id_userLoginId") || validacion("id_userPassword")) && (validacion("id_userLoginId") && validacion("id_userPassword"))) {} else {}
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

function validarCorreo() {}