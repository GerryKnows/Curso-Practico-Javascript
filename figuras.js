// código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado mide: " + areaCuadrado + "cm");

console.groupEnd();


// código del triangulo

console.group("Triangulo");

const ladoTriangulo = 7;
console.log("los lados del triangulo miden: " + ladoTriangulo + "cm");

const baseTriangulo = 5;
console.log("la base del triangulo mide: " + baseTriangulo + "cm");

const alturaTriangulo = 5;
console.log("la altura del triangulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = (ladoTriangulo * 2) + baseTriangulo;
console.log("el perimetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
console.log("el area del triangulo seria: " + areaCuadrado + "cm");

console.groupEnd();

// Código del círculo

console.group("Círculo");

const radioCirculo = 7;
console.log("el radio del círculo mide: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("el diametro del círculo mide: " + diametroCirculo + "cm");

const Pi = Math.PI;
console.log("el valor de Pi es: " + Pi + "cm");

const circunferenciaCirculo = Pi * diametroCirculo;
console.log("la circunferencia del círculo mide: " + circunferenciaCirculo + "cm");

const areaCirculo  = Pi * (radioCirculo * radioCirculo);
console.log("el área del círculo mide: " + areaCirculo + "cm");


console.groupEnd();

