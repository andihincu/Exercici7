let taula = document.getElementById("taula");
let valor = 98;

for(var i = 0; i < 5; i++){
    let fila = taula.insertRow(i);
    for(var j = 0; j <= 9; j++){
    let cella = fila.insertCell(-1);
    cella.style.width = '30px';
    cella.style.textAlign='right';
    cella.style.backgroundColor='blue';
    cella.innerHTML = valor;
    valor=valor-2;
    }
}
