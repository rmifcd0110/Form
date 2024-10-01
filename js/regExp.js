// JavaScript Document
function testTexto(campo,min,max){
	min=(typeof min==='undefined')?0:min;
	max=(typeof max==='undefined')?"":max;
	const valor=campo.value;
	const expresion="^[a-zA-Z\\sá-úÁ-Ú'à-ùÀ-Ùä-üÄ-Ü]{"+min+","+max+"}$";
	const rExp=new RegExp(expresion);
	return rExp.test(valor);
}

function testEmail(campo){
	const valor=campo.value;
	const expresion="^[\\w\\-\\.]{3,}@([\\w\\-\\.]{2,})\\.[\\w\\-]{2,4}$";
	const rExp=newRegExp(expresion);
	return rExp.test(valor);
}

function testCPNacional(campo){
	const valor=campo.value;
	const expresion="^([0-5][0-2]\\d{3}|(070|071|080)\\d{2})$";
	const rExp=new RegExp(expresion);
	return rExp.test(valor);
}

function testTelefonoFijo(campo){
	const valor=campo.value;
	const expresion="^(\\+\\d{2,3}|00\\d{2})?[89]\\d{8}$";
	const rExp=new RegExp(expresion);
	return rExp.test(valor);
}

function testTelefonoMovil(campo){
	const valor=campo.value;
	const expresion="^(\\+\\d{2,3}|00\\d{2})?[67]\\d{8}$";
	const rExp=new RegExp(expresion);
	return rExp.test(valor);
}

function testFecha(campo){
	const valor=campo.value;
	const expresion="^(((0[1-9]|1\\d|2[0-8])\/(0[1-9]|1[0-2]))|((31)\/(0[13578]|1[02]))|((29|30)\/(0[1,3-9]|1[0-2]))))\/\\d{4}$)|(^(29\/02)\/((0[48]00|[13579][26]00|[2468][048]00)|(\\d{2})?(0[48]|[2468][048]|[13579][26]))$";
	const rExp=new RegExp(expresion);
	return rExp.test(valor);
}
function testlista(select){
	const index=select.selectedIndex;
	return(index===null)?-1:index;
}
function testCasillas(casillas,min,max){
	min=(typeof min==='undefined')?0:min;
	max=(typeof max==='undefined')?"":max;
	const seleccionados=casillas.querySelectorAll('input[type="checkbox"):checked');
	if (seleccionados.length<min||seleccionados.length>max)
		return false;
	else
		return seleccionados;
}