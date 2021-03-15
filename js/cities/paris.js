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

let totalStudents = document.getElementById('total-students');
totalStudents.innerHTML = students.length + " étudiants inscrits";

let studentsList = document.getElementById('students-list');

for (let i = 0; i < students.length; i++) {

  if (i < 12) {
    let item = document.createElement('div');
    item.classList.add('col', 'col-3');

    let content = '<div class="user">';
    content += '<span class="avatar"><img src="' + students[i].avatar + '"/></span>';
    content += '<h3 class="user-name">' + students[i].name + '</h3>';
    content += '</div>';

    item.innerHTML = content;

    studentsList.appendChild(item)
  }
}

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

let totalJobs = document.getElementById('total-jobs');
totalJobs.innerHTML = jobs.length + ' jobs étudiants dans la ville';

let jobsList = document.getElementById('jobs-list');

for (let i = 0; i < jobs.length; i++) {
  if(i < 8) {
    let item = document.createElement('div');
    item.classList.add('col', 'col-4');

    let content = '<div class="job">'
    content += '<div class="row">';
    content += '<div class="col col-12">';
    content += '<h4>' + jobs[i].name + '</h4>';
    content += '</div>';
    content += '<div class="col col-6">' + jobs[i].enterprise + '</div>';
    content += '<div class="col col-6">' + jobs[i].salary + '</div>';
    content += '</div></div></div>';

    item.innerHTML = content;

    jobsList.appendChild(item);
  }
}

let places = [
  {
    name: 'Le Louvre',
    place: 'Lieu 1',
    price: '0€'
  },
  {
    name: 'Notre-Dame de Paris',
    place: 'Lieu 2',
    price: '2€'
  },
  {
    name: 'La Tour Eiffel',
    place: 'Lieu 3',
    price: '4€'
  },
  {
    name: 'La Basilique du Sacré-Cœur',
    place: 'Lieu 4',
    price: '12€'
  },
  {
    name: 'L’ Arc de Triomphe',
    place: 'Lieu 5',
    price: '43€'
  },
  {
    name: 'Le cimetière du Père-Lachaise',
    place: 'Lieu 6',
    price: '12€'
  },
  {
    name: 'Les Catacombes de Paris',
    place: 'Lieu 7',
    price: '22€'
  },
  {
    name: 'Le Musée d’Orsay',
    place: 'Lieu 8',
    price: '8€'
  },
]

let totalPlaces = document.getElementById('total-places');
totalPlaces.innerHTML = places.length + ' lieux à visiter dans la ville';

let placesList = document.getElementById('places-list');

for (let i = 0; i < places.length; i++) {
  let item = document.createElement('div');
  item.classList.add('col', 'col-4');

  let content = '<div class="place">';
  content += '<div class="row">';
  content += '<div class="col col-12">';
  content += '<img src="https://source.unsplash.com/random/400x130" />';
  content += '</div>';
  content += '<div class="col col-12">';
  content += '<h4>'+ places[i].name +'</h4>';
  content += '</div>';
  content += '<div class="col col-6">';
  content += places[i].place;
  content += '</div>';
  content += '<div class="col col-6">';
  content += places[i].price;
  content += '</div>';
  content += '</div>';
  content += '</div>';
  content += '</div>';

  item.innerHTML = content;

  placesList.appendChild(item);
}
