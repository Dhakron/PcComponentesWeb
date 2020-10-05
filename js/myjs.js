$(document).ready(function(){
    console.log("ready")
    init()
  });

function init() {
    modalproducto()
}
function modalproducto(){
$('#producto').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var name = button.data('nombre')
    var precio = button.data('precio')
    var num = 0
    var modal = $(this)
    modal.find('.pc-title-producto').text(name)
    var imagenes= ''
    for (num=1; num < 4; num++){
            if(num==1){
                imagenes='<div class="carousel-item active"><img src="productos/'+name+'/'+name+'-1.jpg" class="d-block w-100" alt="'+name+'"></div>'
            }else{
                imagenes+='<div class="carousel-item"><img src="productos/'+name+'/'+name+'-'+num+'.jpg" class="d-block w-100" alt="'+name+'"></div>'
            }   
        }
        modal.find('.carousel-inner').html(imagenes)
        modal.find('.pc-precio-producto').html(precio)
    $.ajax({
        url: "productos/"+name+"/esp.txt",
        type: "GET",
        success: function(respuesta) {
            console.log(respuesta);
            modal.find('.pc-cajaesp-producto').html(respuesta)
            //$('.modal-body p').html(respuesta)
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
    
    
  })
}
