const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const boton = document.querySelector(".btn-copiar");
const texto = document.querySelector(".text");
const texto2 = document.querySelector(".text2");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    boton.removeAttribute("hidden");
    mensaje.style.display = "block";
    texto.innerHTML = "";
    texto2.innerHTML = "";
    mensaje.style.height = "100%";
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.style.display = "block";
    boton.removeAttribute("hidden");
    texto.innerHTML = "";
    texto2.innerHTML = "";
    mensaje.style.height = "100%";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i,","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesncriptada.includes(matrizCodigo[i][0])){
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesncriptada;
}
//boton copiar
function copiar(){
    mensaje.select();
    document.execCommand("copy");
}
//validar si ingresa letras con acentos o caracteres especiales
textArea.addEventListener("keyup",function(event){
    const regex = /^[a-zA-Z\s,.]*$/;
    if(!regex.test(textArea.value)){
        alert("Por favor ingresa solo letras minusculas sin acentos ni caracteres especiales");
        textArea.value = "";
    }
});