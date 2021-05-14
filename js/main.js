
let p1 = "";
let p2 = "";

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
    } else if (p2 == "") {
        p2 = allPlayers[fighter];
        llenaEquipos();
        cambiaFase('fase3');
        setTimeout(() => {
            fighting();
            cambiaFase('fase4');
        }, 1500);
    }

    document.getElementById(fighter).onclick = '';
    document.getElementById(fighter).className = 'selected';
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

    let fighters = document.getElementById('fase4');

    fighters.innerHTML = `<div class="combate" id="combateId">
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

<p class="pMessage" id="pOutput"></p>
<p class="pMessage" id="pRetry" onclick="reset()"></p>`;

};

const p1Attack = () => {
    p1.hit(p2);
    if (p2.health >= 0) {

        let health = document.getElementById("p2Health");
        health.innerText = `Vida: ${p2.health}`;

    } else {
        let health = document.getElementById("p2Health");
        health.innerText = 'Vida: 0';

        let message = document.getElementById("pOutput");
        message.innerText = "Player 1 wins the match";

        setTimeout(() => {
            let retry = document.getElementById("pRetry");
            retry.innerText = "Would you like to play again?"
        }, 2500);


    }
};

const p2Attack = () => {
    p2.hit(p1);
    if (p1.health >= 0) {

        let health = document.getElementById("p1Health");
        health.innerText = `Vida: ${p1.health}`;
    } else {
        let health = document.getElementById("p1Health");
        health.innerText = 'Vida: 0';

        let message = document.getElementById("pOutput");
        message.innerText = "Player 2 wins the match";

        setTimeout(() => {
            let retry = document.getElementById("pRetry");
            retry.innerText = "Would you like to play again?"
        }, 2500);

    }
};

const reset = () => {
    window.location.reload();
}

