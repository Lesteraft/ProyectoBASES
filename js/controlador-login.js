
$("#btn-login").click(function(){
    if($("#txt-user").val() == ""){
        $("#txt-user").addClass("is-invalid");
    }else{
        $("#txt-user").removeClass("is-invalid");
        $("#txt-user").addClass("is-valid");
        if($("#txt-password").val() == ""){
            $("#txt-password").addClass("is-invalid");
        }else{
            $("#txt-password").removeClass("is-invalid");
            $("#txt-password").addClass("is-valid");
            window.location = "desde-login/inicio.html";
        }
    }
})

function validar(){

}