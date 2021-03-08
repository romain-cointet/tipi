let students = [{
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

let jobs = [{
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

let places = [{
    name: 'Colisée de Rome',
    place: 'Lieu 1',
    price: '0€'
  },
  {
    name: 'Forum Romain',
    place: 'Lieu 2',
    price: '2€'
  },
  {
    name: 'Fontaine de Trevi',
    place: 'Lieu 3',
    price: '4€'
  },
  {
    name: 'Place Navone',
    place: 'Lieu 4',
    price: '12€'
  },
  {
    name: 'Place Saint-Pierre',
    place: 'Lieu 5',
    price: '43€'
  },
  {
    name: 'Basilique Saint-Pierre',
    place: 'Lieu 6',
    price: '12€'
  },
  {
    name: 'Chapelle Sixtine',
    place: 'Lieu 7',
    price: '22€'
  },
  {
    name: 'Place d\'Espagne',
    place: 'Lieu 8',
    price: '8€'
  },
]

console.log("It's OK !");

console.log(students.length);

// Comptabiliser le nombre d'étudiants
// Comptabiliser le nombre de job

var resume = document.getElementById('resume');
var students_wrapper = document.getElementById('rome-students');
var jobs_wrapper = document.getElementById('rome-jobs');
var locations_wrapper = document.getElementById('rome-locations');

resume.textContent = students.length + ' étudiants, ' + jobs.length + ' jobs';
students_wrapper.getElementsByTagName('h3')[0].textContent = students.length + ' étudiants inscris';
jobs_wrapper.getElementsByTagName('h3')[0].textContent = jobs.length + ' étudiants dans la ville';
locations_wrapper.getElementsByTagName('h3')[0].textContent = places.length + ' lieux à visiter dans la ville';

// Afficher les étudiants

// showElements(students, 'rome-students-wrapper', 'col', 'col-4', 'city-card');

// Afficher les jobs

// showElements(jobs, 'rome-jobs-wrapper', 'col', 'col-4', 'city-card');

// Afficher quoi visiter ce weekend

// showElements(places, 'rome-locations-wrapper', 'col', 'col-4', 'city-card');