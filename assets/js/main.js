//funcion para abrir los modales a travez de su id
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

// Inicializa y configura el calendario en elmodal de evento.
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        onStart: () => {
            $('.picker').appendTo('body');
        }
    });