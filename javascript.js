ua = navigator.userAgent,
			browser = /Edge\/\d+/.test(ua) ? 'ed' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie?' : /rv\:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'ff' : /Chrom(e|ium)\W\d|CriOS\W\d/.test(ua) ? 'gc' : /\bSafari\W\d/.test(ua) ? 'sa' : /\bOpera\W\d/.test(ua) ? 'op' : /\bOPR\W\d/i.test(ua) ? 'op' : typeof MSPointerEvent !== 'undefined' ? 'ie?' : '',
			os = /Windows NT 10/.test(ua) ? "win10" : /Windows NT 6\.0/.test(ua) ? "winvista" : /Windows NT 6\.1/.test(ua) ? "win7" : /Windows NT 6\.\d/.test(ua) ? "win8" : /Windows NT 5\.1/.test(ua) ? "winxp" : /Windows NT [1-5]\./.test(ua) ? "winnt" : /Mac/.test(ua) ? "mac" : /Linux/.test(ua) ? "linux" : /X11/.test(ua) ? "nix" : "",
			touch = 'ontouchstart' in document.documentElement,
			mobile = /IEMobile|Windows Phone|Lumia/i.test(ua) ? 'w' : /iPhone|iP[oa]d/.test(ua) ? 'i' : /Android/.test(ua) ? 'a' : /BlackBerry|PlayBook|BB10/.test(ua) ? 'b' : /Mobile Safari/.test(ua) ? 's' : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua) ? 1 : 0,
			tablet = /Tablet|iPad/i.test(ua);

result.innerHTML = '' +
    '<br>ua = ' + ua +
    '<br>browser = ' + browser +
    '<br>os = ' + os +
    '<br>mobile = ' + mobile +
    '<br>tablet = ' + tablet +
    '<br>touch = ' + touch +
    '';

function valida(v){
var 
			ua = navigator.userAgent,
			browser = /Edge\/\d+/.test(ua) ? 'ed' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie?' : /rv\:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'ff' : /Chrom(e|ium)\W\d|CriOS\W\d/.test(ua) ? 'gc' : /\bSafari\W\d/.test(ua) ? 'sa' : /\bOpera\W\d/.test(ua) ? 'op' : /\bOPR\W\d/i.test(ua) ? 'op' : typeof MSPointerEvent !== 'undefined' ? 'ie?' : '',
			os = /Windows NT 10/.test(ua) ? "win10" : /Windows NT 6\.0/.test(ua) ? "winvista" : /Windows NT 6\.1/.test(ua) ? "win7" : /Windows NT 6\.\d/.test(ua) ? "win8" : /Windows NT 5\.1/.test(ua) ? "winxp" : /Windows NT [1-5]\./.test(ua) ? "winnt" : /Mac/.test(ua) ? "mac" : /Linux/.test(ua) ? "linux" : /X11/.test(ua) ? "nix" : "",
			touch = 'ontouchstart' in document.documentElement,
			mobile = /IEMobile|Windows Phone|Lumia/i.test(ua) ? 'w' : /iPhone|iP[oa]d/.test(ua) ? 'i' : /Android/.test(ua) ? 'a' : /BlackBerry|PlayBook|BB10/.test(ua) ? 'b' : /Mobile Safari/.test(ua) ? 's' : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua) ? 1 : 0,
			tablet = /Tablet|iPad/i.test(ua);

result.innerHTML = '' +
    '<br>ua = ' + ua +
    '<br>browser = ' + browser +
    '<br>os = ' + os +
    '<br>mobile = ' + mobile +
    '<br>tablet = ' + tablet +
    '<br>touch = ' + touch +
    '';
    var resultado = result
    var voltar = v;
    if (mobile == 'a' && voltar == 0){
        GoGo(1,resultado);
    }else if (mobile == 'i' && voltar == 0) {
        GoGo(2,resultado);
    }else if (os.includes("win") && voltar == 0 ) {
        GoGo(3,resultado);
    }else if (voltar == 1) {
        GoGo(4,resultado);
    }
}

 function GoGo(a,resulta) {
    var pag = a;
    var resultado = resulta
    if (pag == 1) {
        window.location.href = 'android.html';
        result.innerHTML = resulta;
    }else if (pag == 2) {
        window.location.href = 'ios.html';
        result.innerHTML = resulta;
    }else if (pag == 3) {
        result.innerHTML = resulta;
        window.location.href = 'windows.html';
       
    }else if (pag == 4) {
        result.innerHTML = resulta;
        window.location.href = 'index.html';
        result.innerHTML = resulta;
    }else {

    }
 }

