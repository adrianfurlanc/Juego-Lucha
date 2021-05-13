let team1 = [];
let team2 = [];

let p1 = '';
let p2 = '';

const cambiaFase = (destino) => {
	let arrFase = ['fase1', 'fase2', 'fase3', 'fase4'];

	arrFase = arrFase.filter((val) => !destino.includes(val));

	document.getElementById(destino).style.display = 'block';

	for (let _fase of arrFase) {
		document.getElementById(_fase).style.display = 'none';
	}
};

const chooseFighter = (fighter) => {
	if (team2.length < 2) {
		if (team1.length < 2) {
			team1.push(allPlayers[fighter]);
		} else {
			team2.push(allPlayers[fighter]);

			if (team2.length == 2) {
				console.log('ESTE ES EL TEAM1 ', team1);
				console.log('ESTE ES EL TEAM2 ', team2);
				llenaEquipos();
				cambiaFase('fase3');

				setTimeout(() => {
					fighting();
					cambiaFase('fase4');
				}, 1500);
			}
		}

		document.getElementById(fighter).onclick = '';
		document.getElementById(fighter).className = 'seleccionado';
	}
};

const llenaEquipos = () => {
	let equipos = document.getElementById('equipos');

	equipos.innerHTML = `
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team1[0].name}.png" alt="luchador1"></div>
    </div>
    <div class="fightPanel"><img class="fotoVersus" src="img/fight.png" alt="lucha"></div>
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team1[1].name}.png" alt="luchador2"></div>
    </div>
    `;
};

const fighting = () => {
	p1 = team1[0];
	p2 = team1[1];

	console.log('empieza la lucha');

	let luchadores = document.getElementById('fase4');

	luchadores.innerHTML = `<div class="combate" id="combateId">
    <div class="player1">
        <img class="imagePlayer" src="img/Pikachu.png" alt="">
        <p class="pHealth">Vida: 300</p>
        <button class="attackButton">ATTACK</button>
    </div>
    <div class="player1">
        <img class ="imagePlayer" src="img/Greninja.png" alt="">
        <p class="pHealth">Vida: 300</p>
        <button class="attackButton">ATTACK</button>
    </div>
</div>
<p class="pMessage">Player 1 has won the match</p>`;

	console.log(combateId);

	// p1.hit(p2);

	// console.log(p1.vida,p2.vida);
	// do{

	// }while();
};
