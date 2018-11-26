// LibA
var LibA = {};
window.LibA = LibA = (function() {

	LibA.Saluda = function(){ console.log("hola! soy LibA y me traigo cambios del submódulo otra vez"); };

})();

// LibB
var LibB = {};
window.LibB = LibB = (function() {

	LibB.Saluda = function(){ console.log("hola! soy LibB y me traigo cambios del submódulo otra vez"); };

})();

// LibC
var LibC = {};
window.LibC = LibC = (function() {

	LibC.Saluda = function(){ console.log("hola! soy LibC y me traigo cambios del submódulo otra vez"); };

})();