 var html = "<div>\
            {{#perfil}}\
            <p>Nombre: {{name}}</p>\
            <p>Edad: {{age}}</p>\
            <p>Estado Civil: {{civilstate}}</p>\
            <p>Ciudad: {{city}}</p>\
            <p>Pais: {{country}}</p>\
            <p>Carrera: {{carrer}}</p>\
            <p>Universidad: {{university}}</p>\
            <p>Telefono: {{phone}}</p>\
            <p>Email: {{email}}</p><br>\
            {{/perfil}}\
          </div>";

$(document).ready(function(){
    var output = Mustache.render( html, json)
    $("#mustache").html(output);
}); 