let nota1tri;
let nota2tri;
let resultado;

nota1tri = Number(prompt("Digite a nota do 1° trimestre"));
nota1tri = Number(prompt("Digite a nota do 2° trimestre"));

resultadoc = 180-(nota1tri+nota2tri);

if(resultado<= 0){
    alert("Parabens voce passou de ano por nota !!!");
} else{
    alert("Poxa, que pena voce reprovou..." + resultado + " para ser aprovado.");
}
