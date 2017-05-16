// se lee igual de izquierda a derecha que derecha a izquierda

var checkPalindrome = function(inputString) {

var n = inputString.length;
var cadena = ""

while ( 0 <= n){
	
	cadena = cadena + inputString.charAt(n) 

	n-- ;
}

if (cadena == inputString) {
	return true;
}
else {
	return false;
}

};

checkPalindrome("aaddaa");