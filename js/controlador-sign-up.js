$(document).ready(function(){
    
    var planUsuario;

    $(window).click(function(e){
        switch(e.target.id){
            case "plan-basico":
                planUsuario = "basico";
                $("#triangulo-plan-basico").attr("style", "display:");
                $("#triangulo-plan-basico").animate(
                    {
                        opacity:"1"
                    }, "500"
                );
                $("#triangulo-plan-estandar").attr("style", "display:none");
                $("#triangulo-plan-premium").attr("style", "display:none");
                $("#plan-basico").css({"background-color":"#F6121D"});
                $("#plan-estandar").css({"background-color":"#ef6b71"});
                $("#plan-premium").css({"background-color":"#ef6b71"});
                $(".col-planes-1").css({"color":"#F6121D"});
                $(".col-planes-2").css({"color":"#ccc"});
                $(".col-planes-3").css({"color":"#ccc"});
                break;
            case "plan-estandar":
                planUsuario = "estandar";
                $("#triangulo-plan-basico").attr("style", "display:none");
                $("#triangulo-plan-estandar").attr("style", "display:");
                $("#triangulo-plan-estandar").animate(
                    {
                        opacity:"1"
                    }, "500"
                );
                $("#triangulo-plan-premium").attr("style", "display:none");
                $("#plan-basico").css({"background-color":"#ef6b71"});
                $("#plan-estandar").css({"background-color":"#F6121D"});
                $("#plan-premium").css({"background-color":"#ef6b71"});
                $(".col-planes-1").css({"color":"#ccc"});
                $(".col-planes-2").css({"color":"#F6121D"});
                $(".col-planes-3").css({"color":"#ccc"});
                break;
            case "plan-premium":
                planUsuario = "premium";
                $("#triangulo-plan-basico").attr("style", "display:none");
                $("#triangulo-plan-estandar").attr("style", "display:none");
                $("#triangulo-plan-premium").attr("style", "display:");
                $("#triangulo-plan-premium").animate(
                    {
                        opacity:"1"
                    }, "500"
                );
                $("#plan-basico").css({"background-color":"#ef6b71"});
                $("#plan-estandar").css({"background-color":"#ef6b71"});
                $("#plan-premium").css({"background-color":"#F6121D"});
                $(".col-planes-1").css({"color":"#ccc"});
                $(".col-planes-2").css({"color":"#ccc"});
                $(".col-planes-3").css({"color":"#F6121D"});
                break;
            default:
                break;
        }
    });

    //Botones continuar registro
    $("#btn-ir").click(function(){
         $("#info-registro").animate({
            opacity:"0",
            left:"300px"
         },"fast");
        //$("#info-registro").attr("style", "display:none");
        $("#contenido-registro").attr("style", "display:");
        $("#contenido-registro").animate({
            opacity:"1"
         });
        
    });
    $("#btn-cc").click(function(){
        $("#contenido-registro").animate({
            opacity:"0"
         },"fast");
         $("html, body").animate({
            scrollTop: $("#contenido-registro-1").offset().top
        }, 300);
        //$("#contenido-registro").attr("style", "display:none");
        $("#contenido-registro-1").attr("style", "display:");
        $("#contenido-registro-1").animate({
            opacity:"1"
         });
    });

    $("#btn-cc1").click(function(){
        //$("#contenido-registro-1").attr("style", "display:none");
        $("#contenido-registro-1").animate({
            left:"300px",
            opacity:"0"
         },"fast");
        $("#contenido-registro-2").attr("style", "display:");
        $("#contenido-registro-2").animate({
            opacity:"1"
         });
    });

    //Validacion campos
    var emailValido;
    var passValido;
    $("#user-email").keyup(function(){
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(regex.test($("#user-email").val())){
            $("#valid-email").attr("style", "display:inline");
            $("#invalid-email").attr("style", "display:none");
            ////////////
            $("#texto-invalid-email").attr("style", "display:none");
            $("#email-vacio").attr("style", "display:none");
            emailValido = true;
        }else{
            $("#invalid-email").attr("style", "display:inline");
            $("#valid-email").attr("style", "display:none");
            emailValido = false;
        }
    });

    $("#user-password").keyup(function(){
       
        if($("#user-password").val().length>=4){
            $("#valid-password").attr("style", "display:inline");
            $("#invalid-password").attr("style", "display:none");
            ///////////
            $("#password-vacio").attr("style", "display:none");
            passValido = true;
        }else{
            $("#invalid-password").attr("style", "display:inline");
            $("#valid-password").attr("style", "display:none");
            passValido = false;
        }
    });
    $("#btn-cc2").click(function(){
        //CORREO, CONTRASENIA VALIDO
        if(emailValido == true && passValido == true){
            console.log("correo y contra valido"); //Capturar informacion y seguir con siguiente paso
            console.log("Plan:"+planUsuario+"\nCorreo:"+$("#user-email").val()+"\nContraseña:"+$("#user-password").val());
            $("#texto-invalid-email").attr("style", "display:none");
            $("#email-vacio").attr("style", "display:none");
            $("#password-vacio").attr("style", "display:none");
            //CORREO, CONTRASENIA INVALIDA
        }else if(emailValido == false && passValido == false){
            console.log("correo y contra ivalido"); 
            $("#texto-invalid-email").attr("style", "display:inline");
            $("#password-vacio").attr("style", "display:inline");
            //CORREO INVALIDO, CONTRASENIA VALIDA
        }else if(emailValido == false && passValido == true){
            console.log("correo in contra va");
            $("#texto-invalid-email").attr("style", "display:inline");
            $("#email-vacio").attr("style", "display:none");
            $("#password-vacio").attr("style", "display:none");
            //CORREO VALIDO, CONTRASENIA INVALIDA
        }else if(passValido == false && emailValido == true){
            console.log("correo co contra in");
            $("#texto-invalid-email").attr("style", "display:none");
            $("#email-vacio").attr("style", "display:none");
            $("#password-vacio").attr("style", "display:inline");
            //CAMPO CORREO, CONTRASENIA VACIO
        }else if($("#user-email").val() == "" && $("#user-password").val() == ""){
            console.log("falta correo y contra");
            $("#texto-invalid-email").attr("style", "display:none");
            $("#email-vacio").attr("style", "display:inline");
            $("#password-vacio").attr("style", "display:inline");
            //CAMPO CORREO VACIO
        }else if($("#user-email").val() == "" && $("#user-password").val() != ""){
            console.log("falta correo");
            $("#texto-invalid-email").attr("style", "display:none");
            $("#email-vacio").attr("style", "display:inline");
            $("#password-vacio").attr("style", "display:none");
            //CAMPO CONTRASENIA VACIO
        }else if($("#user-password").val() == "" && $("#user-email").val() != ""){
            console.log("falta contra");
            $("#texto-invalid-email").attr("style", "display:none");
            $("#email-vacio").attr("style", "display:none");
            $("#password-vacio").attr("style", "display:inline");
        }
    });
});