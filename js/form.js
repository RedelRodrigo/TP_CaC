const nombre = document.getElementById("name");
const pass = document.getElementById("pass");
const mail = document.getElementById("mail");
const form = document.getElementById("form");
const gen = document.getElementById("gen");
const terminos = document.getElementById("terminos");

const imgform = document.getElementById("imgform");
const archivoRuta = imgform.value;
const extPermitidas = /(.jpeg|.jpg|.png|.gif)$/i;

const warningn = document.getElementById("warningn");
const warningp = document.getElementById("warningp");
const warningm = document.getElementById("warningm");
const warningi = document.getElementById("warningi");
const warningt = document.getElementById("warningt");

const usuario = document.getElementById("name");
const nombreUsuario = document.getElementById("nombreUsuario");

form.addEventListener("submit", e => {
  e.defaultPrevented();
  /*-------------- Definir alertas -------------------------*/
  warningn.innerHTML = " ";
  warningp.innerHTML = " ";
  warningm.innerHTML = " ";
  warningi.innerHTML = " ";
  warningt.innerHTML = " ";

  /*--------------------- Vaciar alertas ---------------------------------*/
  let entrar = false;
  let genero = " ";
  let warningsm = " ";
  let warningsp = " ";
  let warningsn = " ";
  let warningst = " ";

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  /*--------- Comprobación de la terminación completa del formulario ----------*/
  if (nombre.value.length < 5) {
    warningsn += `El nombre no es valido! <br>`;
    entrar = true;
    warningn.innerHTML = warningsn;
  }
  if (!regexEmail.test(mail.value)) {
    warningsm += `El mail no es valido! <br>`;
    entrar = true;
    warningm.innerHTML = warningsm;
  }
  if (pass.value.length < 8) {
    warningsp += `La contraseña no es valida! <br>`;
    entrar = true;
    warningp.innerHTML = warningsp;
  }

  if (!terminos.checked) {
    warningst += `Acepte los terminos para continuar`;
    entrar = true;
    warningt.innerHTML = warningst;
  }

  /*------------ VALIDACIÓN DE LA IMAGEN ----------------*/

  if (!extPermitidas.exec(archivoRuta)) {
    warningi.innerHTML += `Debe seleccionar una imagen`;
    imgform.value = "";
    entrar = true;
  }

  /*---------------- Saber si es hombre o mujer -------------------  */
  if (gen.value == 1) {
    genero = "señor";
  }
  if (gen.value == 2) {
    genero = "señora";
  }

  /*--------------MENSAJE FORM COMPLETO------------------------------*/
  if (!entrar) {
    nombreUsuario.innerHTML += `Bienvenido ${genero} ${usuario.value}, se completo el formulario correctamente!`;
  }
});
