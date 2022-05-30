var boton1 = document.getElementById("DescargarCaliMIO");
var boton2 = document.getElementById("DescargarSaldoMIO");
// var boton3 = document.getElementById("DescargarAppi");

boton1.addEventListener("click",IrAGooglePlayCaliMIO);
boton2.addEventListener("click",IrAGooglePlaySaldoMIO);
boton3.addEventListener("click",IrAGooglePlayAppi);

function IrAGooglePlayCaliMIO () {
    window.open("https://play.google.com/store/apps/details?id=appinventor.ai_angi_pardo.CaliMIO&hl=es_HN");
}

function IrAGooglePlaySaldoMIO () {
    window.open("https://play.google.com/store/apps/details?id=appinventor.ai_angi_pardo.SaldoMIO&hl=es_HN");
}

function IrAGooglePlayAppi () {
    document.open("index.html");
}