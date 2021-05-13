let team1 = [];
let team2 = [];

let p1 = "";
let p2 = "";

let result;

const cambiaFase = (destino) => {
    let arrFase = ['fase1', 'fase2', 'fase3', 'fase4'];

    arrFase = arrFase.filter((val) => !destino.includes(val));

    document.getElementById(destino).style.display = 'block';

    for (let _fase of arrFase) {
        document.getElementById(_fase).style.display = 'none';
    }
};

const chooseFighter = (fighter) => {
    if (p1 == "") {
        p1 = allPlayers[fighter]
        console.log(p1);
    } else if (p2 == "") {
        p2 = allPlayers[fighter];
        console.log(p2);
        llenaEquipos();
        cambiaFase('fase3');
        setTimeout(() => {
            fighting();
            cambiaFase('fase4');
        }, 1500);
    }

    document.getElementById(fighter).onclick = '';
    document.getElementById(fighter).className = 'seleccionado';
}


const llenaEquipos = () => {
    let equipos = document.getElementById('equipos');

    equipos.innerHTML = `
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${p1.name}.png" alt="luchador1"></div>
    </div>
    <div class="fightPanel"><img class="fotoVersus" src="img/fight.png" alt="lucha"></div>
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${p2.name}.png" alt="luchador2"></div>
    </div>
    `;
};


const fighting = () => {

    let luchadores = document.getElementById('fase4');

    luchadores.innerHTML = `<div class="combate" id="combateId">
    <div class="player1">
        <img class="imagePlayer" src="img/${p1.name}.png" alt="">
        <p class="pHealth" id="p1Health" >Vida: ${p1.health}</p>
        <button class="attackButton" onclick="p1Attack()">ATTACK</button>
    </div>
    <div class="player1">
        <img class ="imagePlayer" src="img/${p2.name}.png" alt="">
        <p class="pHealth" id="p2Health"> Vida: ${p2.health}</p>
        <button class="attackButton" onclick="p2Attack()">ATTACK</button>
    </div>
</div>
<p class="pMessage" id="pOutput"></p>`;

};

const p1Attack = () => {
    if (p2.health >= 0) {
        p1.hit(p2);

        let health = document.getElementById("p2Health");
        health.innerText = `Vida: ${p2.health}`;

    } else {
        let health = document.getElementById("p2Health");
        health.innerText = 'Vida: 0';

        let message = document.getElementById("pOutput");
        // console.log(message);
        message.innerText = "Player 1 wins the match";
    }
};

const p2Attack = () => {
    if (p1.health >= 0) {
        p2.hit(p1);

        let health = document.getElementById("p1Health");
        health.innerText = `Vida: ${p1.health}`;
    } else {
        let health = document.getElementById("p2Health");
        health.innerText = 'Vida: 0';

        let message = document.getElementById("pOutput");
        // console.log(message);
        message.innerText = "Player 2 wins the match";

    }
};
