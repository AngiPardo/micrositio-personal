var boton1 = document.getElementById("DescargarWhatsApp");
var boton2 = document.getElementById("DescargarGmail");
var boton3 = document.getElementById("DescargarIFTTT");
var boton4 = document.getElementById("DescargarTelegram");
var boton5 = document.getElementById("DescargarRss");
var boton6 = document.getElementById("DescargarLifehacks");

boton1.addEventListener("click",IrALibro1);
boton2.addEventListener("click",IrALibro2);
boton3.addEventListener("click",IrALibro3);
boton4.addEventListener("click",IrALibro4);
boton5.addEventListener("click",IrALibro5);
boton6.addEventListener("click",IrALibro5);

function IrALibro1 () {
    window.open("https://irreverente.net/InfoP/COMO AHORRAR TIEMPO USANDO WHATSAPP BUSINESS.pdf");
}

function IrALibro2 () {
    window.open("https://irreverente.net/InfoP/SACALE JUGO A TU CUENTA DE GMAIL.pdf");
}

function IrALibro3 () {
    window.open("https://irreverente.net/InfoP/COMO AHORRAR TIEMPO CON TU CELULAR Usando IFTTT.pdf");
}

function IrALibro4 () {
    window.open("https://irreverente.net/InfoP/AHORRA TIEMPO DE VIDA Usando Telegram.pdf");
}

function IrALibro5 () {
    window.open("https://irreverente.net/InfoP/COMO AHORRAR TIEMPO EN Instagram Facebook y TikTok.pdf");
}

function IrALibro6 () {
    window.open("https://irreverente.net/InfoP/AHORRA TIEMPO Y DINERO Usando Apps y LifeHacks para Todos.pdf");
}