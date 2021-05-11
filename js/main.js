
let team1 = [];
let team2 = [];

let p1 = "";
let p2 = "";


const cambiaFase = (destino) => {

    let arrFase = ["fase1","fase2","fase3","fase4"];

    arrFase = arrFase.filter(val => !destino.includes(val));

    document.getElementById(destino).style.display = "block";

    for(let _fase of arrFase){
        document.getElementById(_fase).style.display = "none";
    }

};

const chooseFighter = (fighter) => {


    if(team2.length < 2){

        if(team1.length < 2){
            team1.push(allPlayers[fighter]);

        } else {

            team2.push(allPlayers[fighter]);

            if(team2.length == 2){
                console.log("ESTE ES EL TEAM1 ", team1);
                console.log("ESTE ES EL TEAM2 ", team2);
                llenaEquipos();
                cambiaFase("fase3");

                setTimeout(() => {
                    cambiaFase("fase4");
                }, 5000);
            }

        }

        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "seleccionado";


    }

}

const llenaEquipos = () => {
    let equipos = document.getElementById("equipos");

    equipos.innerHTML = `
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team1[0].name}.png" alt="luchador1"></div>
        <div><img class="picFighter" src="img/${team1[1].name}.png" alt="luchador3"></div>
    </div>
    <div class="fightPanel"><img class="fotoVersus" src="img/fight.png" alt="lucha"></div>
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team2[0].name}.png" alt="luchador2"></div>
        <div><img class="picFighter" src="img/${team2[1].name}.png" alt="luchador4"></div>
    </div>
    `;
}

const fighting = () => {

    p1 = team1[0];
    p2 = team2[0];

    console.log("empieza la lucha");

    p1.hit(p2);

    console.log(p1.vida,p2.vida);
    // do{

    // }while();

}
