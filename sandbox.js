const goalkeeper = document.querySelector('.goalkeeper');
const defender = document.querySelectorAll('.defender');
const midfielder = document.querySelectorAll('.midfielder');
const forward = document.querySelectorAll('.forward');
const score = document.querySelector('.score');
const boxOne = document.querySelector('.boxOne');


let totalScore = 0;

const players = {
    goalkeepers: [
        {
            name: 'Martinez',
            value: 8,
            image: './images/martinez.jpeg'
        },
        {
            name: 'Neuer',
            value: 7,
            image: './images/neuer.jpeg'
        },
        {
            name: 'Oblak',
            value: 10,
            image: './images/oblak.jpeg'
        },
        {
            name: 'Becker',
            value: 8,
            image: './images/becker.jpeg'
        },
        {
            name: 'Courtois',
            value: 8,
            image: './images/courtois.jpeg'
        },
        {
            name: 'De Gea',
            value: 7,
            image: './images/degea.jpeg'
        },
        {
            name: 'Arrizabalaga',
            value: 6,
            image: './images/arrizabalaga.jpeg'
        },
    ],

    defenders: [
        {
            name: 'Virgil van Dijk',
            value: 10,
            image: './images/vandijk.jpeg'
        },
        {
            name: 'Cahill',
            value: 5,
            image: './images/cahill.jpeg'
        },
        {
            name: 'Marquinhos',
            value: 8,
            image: './images/marquinhos.jpg'
        },
        {
            name: 'Saliba',
            value: 7,
            image: './images/saliba.jpeg'
        },
        {
            name: 'Rüdiger',
            value: 6,
            image: './images/rudiger.jpeg'
        },
        {
            name: 'Varane',
            value: 8,
            image: './images/varane.jpeg'
        },
        {
            name: 'Koulibaly',
            value: 7,
            image: './images/koulibaly.jpeg'
        },
        {
            name: 'Gerard Piqué',
            value: 5,
            image: './images/pique.jpeg'
        },
        {
            name: 'Sergio Ramos',
            value: 6,
            image: './images/ramos.jpeg'
        },
        {
            name: 'Chiellini',
            value: 6,
            image: './images/chiellini.jpeg'
        },
        {
            name: 'Laporte',
            value: 7,
            image: './images/laporte.jpeg'
        }

    ],

    midfielders: [
        {
            name: 'De Bruyne',
            value: 10,
            image: './images/debruyne.jpeg'
        },
        {
            name: 'Xhaka',
            value: 6,
            image: './images/xhaka.jpeg'
        },
        {
            name: 'Modric',
            value: 9,
            image: './images/modric.jpeg'
        },
        {
            name: 'Kante',
            value: 8,
            image: './images/kante.jpeg'
        },
        {
            name: 'Fernandes',
            value: 7,
            image: './images/fernandes.jpeg'
        },
        {
            name: 'Pogba',
            value: 8,
            image: './images/pogba.jpeg'
        },
        {
            name: 'De Jong',
            value: 7,
            image: './images/dejong.jpeg'
        },
        {
            name: 'Kroos',
            value: 8,
            image: './images/kroos.jpeg'
        },
        {
            name: 'Gündoğan',
            value: 7,
            image: './images/gundogan.jpeg'
        },
        {
            name: 'Jorginho',
            value: 6,
            image: './images/jorginho.jpeg'
        },
        {
            name: 'Elneny',
            value: 5,
            image: './images/elneny.jpeg'
        },
        {
            name: 'Perisic',
            value: 6,
            image: './images/perisic.jpeg'
        },
    ],

    forwards: [
        {
            name: 'Mbappé',
            value: 9,
            image: './images/mbappe.jpeg'
        },
        {
            name: 'Morata',
            value: 7,
            image: './images/morata.jpeg'
        },
        {
            name: 'Ronaldo',
            value: 7,
            image: './images/ronaldo.jpeg'
        },
        {
            name: 'Messi',
            value: 10,
            image: './images/messi.jpeg'
        },
        {
            name: 'Haaland',
            value: 9,
            image: './images/haaland.jpeg'
        },
        {
            name: 'Lewandowski',
            value: 9,
            image: './images/lewandowski.jpeg'
        },
        {
            name: 'Salah',
            value: 8,
            image: './images/salah.jpeg'
        },
        {
            name: 'Kane',
            value: 10,
            image: './images/kane.jpeg'
        },
        {
            name: 'Benzema',
            value: 8,
            image: './images/benzema.jpeg'
        },
        {
            name: 'Sterling',
            value: 6,
            image: './images/sterling.jpeg'
        },
        {
            name: 'Neymar',
            value: 9,
            image: './images/neymar.jpeg'
        }
    ]
}


goalkeeper.addEventListener('click', (e) => {
    console.log(e);
    
    let random = Math.floor(Math.random() * players.goalkeepers.length);

    let goalkeeperOne = e.target.parentElement.querySelector('.goalkeeperOne');
    let value = e.target.parentElement.querySelector('.value');
    let image = e.target.parentElement.querySelector('.image');
    let img = document.createElement('img');
    img.setAttribute('src', players.goalkeepers[random].image);

    image.insertAdjacentElement('afterbegin', img);
    goalkeeperOne.textContent = players.goalkeepers[random].name;
    value.textContent = players.goalkeepers[random].value;

    goalkeeperOne.classList.add('active');
    value.classList.add('active');

    totalScore += players.goalkeepers[random].value;
    score.textContent = totalScore;
    console.log(totalScore);

}, {once: true})



defender.forEach(element => {

    element.addEventListener('click', (e) => {
        console.log(e);

        const random = Math.floor(Math.random() * players.defenders.length);

        let defenderOne = e.target.parentElement.querySelector('.defenderOne');
        let value = e.target.parentElement.querySelector('.value');
        let image = e.target.parentElement.querySelector('.image');
        // let value = Object.assign(document.createElement('div'), { className: 'value' });
        let img = document.createElement('img');
        img.setAttribute('src', players.defenders[random].image);

        image.insertAdjacentElement('afterbegin', img);
        defenderOne.textContent = players.defenders[random].name;
        value.textContent = players.defenders[random].value;

        defenderOne.classList.add('active');
        value.classList.add('active');

        totalScore += players.defenders[random].value;
        score.textContent = totalScore;
        console.log(totalScore);       

    }, {once: true})

})

midfielder.forEach(element => {

    element.addEventListener('click', (e) => {

        const random = Math.floor(Math.random() * players.midfielders.length);

        let midfielderOne = e.target.parentElement.querySelector('.midfielderOne');
        let value = e.target.parentElement.querySelector('.value');
        let image = e.target.parentElement.querySelector('.image');

        let img = document.createElement('img');
        img.setAttribute('src', players.midfielders[random].image);

        image.insertAdjacentElement('afterbegin', img);
        midfielderOne.textContent = players.midfielders[random].name;
        value.textContent = players.midfielders[random].value;

        midfielderOne.classList.add('active');
        value.classList.add('active');

        totalScore += players.midfielders[random].value;
        score.textContent = totalScore;
        console.log(totalScore);

    }, {once: true})

})

forward.forEach(element => {

    element.addEventListener('click', (e) => {

        const random = Math.floor(Math.random() * players.forwards.length);

        let forwardOne = e.target.parentElement.querySelector('.forwardOne');
        let value = e.target.parentElement.querySelector('.value');
        let image = e.target.parentElement.querySelector('.image');

        let img = document.createElement('img');
        img.setAttribute('src', players.forwards[random].image);

        image.insertAdjacentElement('afterbegin', img);
        forwardOne.textContent = players.forwards[random].name;
        value.textContent = players.forwards[random].value;

        forwardOne.classList.add('active');
        value.classList.add('active');

        totalScore += players.forwards[random].value;
        score.textContent = totalScore;
        console.log(totalScore);

    }, {once: true})

})