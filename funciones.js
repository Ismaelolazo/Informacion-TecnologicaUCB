window.addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  var ob=document.getElementById('enlace');
  ob.addEventListener('click',mostrarOcultarMensaje,false);
}
function mostrarOcultarMensaje(e){  
  var ele=document.getElementById('mensaje');
  var en=document.getElementById('enlace');
  if (ele.className=='mensajeoculto'){
    ele.className='mensajevisible';
    en.style.color="red";
    en.value="Ocultar detalles";
  } else {
    ele.className='mensajeoculto';
    en.style.color="green";
    en.value="Mostrar detalles";
  }   
}