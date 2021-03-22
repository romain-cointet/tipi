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

$(function(){

  let totalStudents = document.getElementById('total-students');
  totalStudents.innerHTML = students.length + " étudiants inscrits";

  let totalJobs = document.getElementById('total-jobs');
  totalJobs.innerHTML = jobs.length + ' jobs étudiants dans la ville';

  let totalPlaces = document.getElementById('total-places');
  totalPlaces.innerHTML = places.length + ' lieux à visiter dans la ville';

  function showItems (tableau, id, limit) {

    limit = limit -1;

    let wrapperId = document.getElementById(id);

    console.log(id)

    for (let i = 0; i < tableau.length; i++) {

      if(id == 'students-list') {
        if(i < limit) {
          let item = document.createElement('div');
          item.classList.add('col', 'col-3');

          let content = '<div class="user">';
          content += '<span class="avatar"><img src="' + tableau[i].avatar + '"/></span>';
          content += '<h3 class="user-name">' + tableau[i].name + '</h3>';
          content += '</div>';

          item.innerHTML = content;

          wrapperId.appendChild(item)
        }
      } else if (id == 'jobs-list') {

        if(i <= limit) {
          let item = document.createElement('div');
          item.classList.add('col', 'col-4');

          let content = '<div class="job">'
          content += '<div class="row">';
          content += '<div class="col col-12">';
          content += '<h4>' + tableau[i].name + '</h4>';
          content += '</div>';
          content += '<div class="col col-6">' + tableau[i].enterprise + '</div>';
          content += '<div class="col col-6">' + tableau[i].salary + '</div>';
          content += '</div></div></div>';

          item.innerHTML = content;

          wrapperId.appendChild(item);
        }
      } else {
        if (i <= limit) {
          let item = document.createElement('div');
          item.classList.add('col', 'col-4');

          let content = '<div class="place">';
          content += '<div class="row">';
          content += '<div class="col col-12">';
          content += '<img src="https://source.unsplash.com/random/400x130" />';
          content += '</div>';
          content += '<div class="col col-12">';
          content += '<h4>'+ tableau[i].name +'</h4>';
          content += '</div>';
          content += '<div class="col col-6">';
          content += tableau[i].place;
          content += '</div>';
          content += '<div class="col col-6">';
          content += tableau[i].price;
          content += '</div>';
          content += '</div>';
          content += '</div>';
          content += '</div>';

          item.innerHTML = content;

          wrapperId.appendChild(item);
        }

      }
    }
  }

  showItems(students, 'students-list', 12)
  showItems(jobs, 'jobs-list', 9)
  showItems(places, 'places-list', 6)
})
