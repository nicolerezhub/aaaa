let = parseFloat(prompt('Quantas cartas'))
let naipe = (Math.floor(Math.random()* 3))  //0,1,2,3 
let numero= (Math.floor(Math.random()* 3))


if(naipe == 0){
   naipe = "copas"
}else if(naipe == 1){
   naipe = "paus"
}

console.log('')