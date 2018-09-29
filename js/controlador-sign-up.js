$(document).ready(function(){
    $("#btn-cc1").click(function(){
        $("#contenido-central-1").attr("style", "display:none");
        $("#contenido-central-2").attr("style", "display:");
    });

    //Validacion campos
    $("#user-email").keyup(function(){
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(regex.test($("#user-email").val())){
            console.log("valido");
        }else{
            console.log("invalido");
        }
    });
    $("btn-cc2").click(function(){

    });
});