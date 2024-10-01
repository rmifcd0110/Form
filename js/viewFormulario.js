// JavaScript Document
const butValidar=window.document.getElementById("butValidar");
const txtNombre=window.document.getElementById("txtNombre");
const txtTelefonoFijo=window.document.getElementById("txtTelefonoFijo");
const txtTelefonoMovil=window.document.getElementById("txtTelefonoMovil");
const txtCP=window.document.getElementById("txtCP");
const txtFNac=window.document.getElementById("txtFNac");
const txtEmail=window.document.getElementById("txtEmail");
const selCoche=window.document.getElementById("selCoche");
const casillasExtra=window.document.getElementById("divCasillas");
const validar=window.document.getElementById("divValidar");

window.onload = function(){
	txtNombre.addEventListener('input',validarTexto,false);
	txtTelefonoFijo.addEventListener('input',validarTelefonoFijo,false);
	txtTelefonoMovil.addEventListener('input',validarTelefonoMovil,false);
	txtCP.addEventListener('input',validarCP,false);
	txtFNac.addEventListener('input',validarFecha,false);
	txtEmail.addEventListener('input',validarEmail,false);
	selCoche.addEventListener('change',validarLista,false);
	casillasExtra.addEventListener('change',validarCasillas,false);
	butValidar.addEventListener('click',validarForm,false);
}

let clearRender=function(e){
	nodo=window.document.getElementById(e).getElementsByTagName('span')[0];
	if (nodo&&nodo.parentNode){
		nodo.parentNode.removeChild(nodo);
	}
}

let renderError = function(e){
	clearRender(e);
	let span = window.document.createElement('span');
	span.innerHTML = "<img src='img/cerrar.png' width='10' />";
	window.document.getElementById(e).appendChild(span);
}

let renderOk = function(e){
	clearRender(e);
	let span = window.document.createElement('span');
	span.innerHTML = "<img src='./img/doble-verificacion.png' width='10' />";
	window.document.getElementById(e).appendChild(span);
}

let renderHelp = function(){
	validar.innerHTML='<div id="divValNombre">Nombre:</div><div id="divValTlfF">Teléfono Fijo:</div><div id="divValTlfM">Teléfono Móvil:</div><div id="divValCP">CP:</div><div id="divValFNac">Fecha de nacimiento:</div><div id="divValEmail">Email:</div><div id="divValSelCoche">Tipo de Coche:</div><div id="divValCExtra">Extras del coche:</div>'
}

function validarTexto(){
!testTexto(txtNombre,3,100)?renderError('divValNombre'):renderOk('divValNombre');
}
function validarTelefonoFijo(){
!testTelefonoFijo(txtTelefonoFijo)?renderError('divValTlfF'):renderOk('divValTlfF');
}
function validarTelefonoMovil(){
!testTelefonoMovil(txtTelefonoMovil)?renderError('divValTlfM'):renderOk('divValTlfM');
}
function validarCP(){
!testCPNacional(txtCP)?renderError('divValCP'):renderOk('divValCP');
}
function validarEmail(){
!testEmail(txtEmail)?renderError('divValEmail'):renderOk('divValEmail');
}
function validarFecha(){
!testFecha(txtFNac)?renderError('divValFNac'):renderOk('divValFNac');
}
function validarLista(){
!testLista(selCoche)?renderError('divValSelCoche'):renderOk('divValSelCoche');
}
function validarCasillas(){
!testCasillas(casillasExtra,1,3)?renderError('divValCExtra'):renderOk('divValCExtra');
}