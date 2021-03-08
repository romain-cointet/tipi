let students = [
  {
    name: 'Alex Edwards',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Gunther Ackner',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Nayah Tantoh',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Roelof Bekkenenks',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Cecilia Pozo',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Jesús Moruga',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Pan Feng',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Juan Jose Esteve',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Salomé Fernán',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Deependra Bardhan',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Pok Ae-Ra',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Tamaki Ryushi',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Salomé Fernán',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Deependra Bardhan',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Pok Ae-Ra',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
  {
    name: 'Tamaki Ryushi',
    avatar: 'https://source.unsplash.com/random/32x32'
  },
];

let jobs = [
  {
    name: 'Livreur de pizzas à vélo',
    enterprise: 'Pizza Gucci',
    salary: '20€/h'
  },
  {
    name: 'Rabatteurs de bars',
    enterprise: 'Le Trader',
    salary: '20€/h'
  },
  {
    name: 'Traducteur de français',
    enterprise: 'Linguo',
    salary: '20€/h'
  },
  {
    name: 'Promeneur de chiens',
    enterprise: 'Canirun',
    salary: '20€/h'
  },
  {
    name: 'Babysitter',
    enterprise: 'Particulier',
    salary: '20€/h'
  },
  {
    name: 'Serveur de bar',
    enterprise: 'Le Trader',
    salary: '20€/h'
  },
  {
    name: 'Serveur restaurant',
    enterprise: 'La Gouaille',
    salary: '20€/h'
  },
  {
    name: 'Cours particuliers math collège',
    enterprise: 'Schoolmouv',
    salary: '20€/h'
  },
  {
    name: 'Cours particuliers français collège',
    enterprise: 'Schoolmouv',
    salary: '20€/h'
  },
  {
    name: 'Cours particuliers anglais collège',
    enterprise: 'Schoolmouv',
    salary: '20€/h'
  },
  {
    name: 'Cours particuliers SVT collège',
    enterprise: 'Schoolmouv',
    salary: '20€/h'
  },
]

let places = [
  {
    name: 'Plaza Mayor',
    place: 'Lieu 1',
    price: '0€'
  },
  {
    name: 'Le palais Royal',
    place: 'Lieu 2',
    price: '2€'
  },
  {
    name: 'Le Teatro Real',
    place: 'Lieu 3',
    price: '4€'
  },
  {
    name: 'Le musée du Prado',
    place: 'Lieu 4',
    price: '12€'
  },
  {
    name: 'Le Jardin Botanique Royal',
    place: 'Lieu 5',
    price: '43€'
  },
  {
    name: 'Musée national centre d’art Reina Sofía',
    place: 'Lieu 6',
    price: '12€'
  },
  {
    name: 'Le Musée Thyssen Bornemisza',
    place: 'Lieu 7',
    price: '22€'
  },
  {
    name: 'La Cathédrale de l’Almudena',
    place: 'Lieu 8',
    price: '8€'
  },
]

// On récupère l'élément html qui contiendra les stats
let statsWrapper = document.getElementById('statsville');

// On déclare les variables des stats
let statsville = {
  jobs: 0,
  students: 0,
  places: 0
}
// Nb jobs total
statsville.jobs = jobs.length;

// Nb étudiants total
statsville.students = students.length;

// Nb endroits total
statsville.places = places.length;

// On met le h1 avec le nom de la ville
let div1 = document.createElement('div');
div1.innerHTML = '<h1>Madrid</h1>'
statsWrapper.appendChild(div1)

// Ajout du h2 avec total étudiants & jobs
let div2 = document.createElement('div');
div2.innerHTML = '<h2>' + statsville.students + ' étudiants, ' + statsville.jobs + ' jobs</h2>'
statsWrapper.appendChild(div2)

// On récupère l'élément html qui contiendra le total inscrits
let statsInscrits = document.getElementById('totalinscrits');

// On cible le h3 et on y met le contenu total inscrits
let div3 = document.createElement('h3');
div3.innerHTML = '' + statsville.students + ' étudiants inscrits'
statsInscrits.appendChild(div3)

// On récupère l'élément html qui contiendra le total jobs étudiants
let statsJobs = document.getElementById('totaljobs');

// On cible le h3 et on y met le contenu total inscrits
let div4 = document.createElement('h3');
div4.innerHTML = '' + statsville.jobs + ' jobs étudiants dans la ville'
statsJobs.appendChild(div4)

// On récupère l'élément html qui contiendra le total jobs étudiants
let statsPlaces = document.getElementById('totalplaces');

// On cible le h3 et on y met le contenu total inscrits
let div5 = document.createElement('h3');
div5.innerHTML = '' + statsville.places + ' lieux à visiter dans la ville'
statsPlaces.appendChild(div5)
