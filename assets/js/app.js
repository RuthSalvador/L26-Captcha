window.addEventListener('load', crearCaptcha);

var resetear = document.getElementById('resetear');
resetear.addEventListener("click", function(e){
   e.preventDefault();
  crearCaptcha();
});

  /** crear captcha **/
  function crearCaptcha(){

    var letra = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W',
                            'X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
                            'w','x','y','z');

    var numero = new Array ('0','1','2','3','4','5','6','7','8','9');

    for (var i = 1; i < 7; i++) {
      var l1 = letra[Math.floor(Math.random() * letra.length)];
      var n1 = numero[Math.floor(Math.random() * numero.length)];
      var l2 = letra[Math.floor(Math.random() * letra.length)];
      var n2 = numero[Math.floor(Math.random() * numero.length)];
      var l3 = letra[Math.floor(Math.random() * letra.length)];
      var n3 = numero[Math.floor(Math.random() * numero.length)];
      var l4 = letra[Math.floor(Math.random() * letra.length)];
    }

    var codigo = l1 + n1 + l2 + n2 + l3 + n3 + l4;
    document.getElementById('cap').value = codigo;
  }

/** validar que el captcha sea igual**/
var element = document.querySelector(".formulario");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validaCaptcha();
});

  function validaCaptcha(){
    var cap = document.getElementById("cap");
    var escribir = document.getElementById("escribir");
    compara(cap, escribir);
  }
  /*** comparando ***/
  function compara(cap, escribir){
    if (cap.value !== escribir.value) {
      mostrar("El código debe coincidir",escribir);
      escribir.focus();
      return false;
    } else {
      mostrar("Captcha correcto",escribir);
    }
  }

  function ocultar(input){
    var span = input.nextElementSibling;
    span.setAttribute("style","display:none");
  }

  function mostrar(alerta,input){
      var span = input.nextElementSibling;
      span.setAttribute("style","display:block");
      span.appendChild(document.createTextNode(alerta));
  }
