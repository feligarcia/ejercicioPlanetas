let nombrePlanetas = Array ('Tierra', 'Marte');
let distancia = [6,3,'67'];
const tamano = [];

console.log(nombrePlanetas);
console.log(distancia);
console.log(tamano);

let i=0;
while (i<= nombrePlanetas.length - 1) {
console.log(i);
console.log(nombrePlanetas[i]);
i = i + 1
}

/*for (const key in object){
    if (Object.hasOwnProperty.call(objets, key)){
        const element = object[key];
    }
}*/
for (const key in nombrePlanetas){
    console.log(nombrePlanetas[key]);
}

for (const planeta of nombrePlanetas){
    console.log(planeta);
}

for (const key in distancia){
    if (distancia[key] == '5'){
        console.log('Se encontro la distancia')}
        else{
            console.log('No se encontro la distancia')
        }
}