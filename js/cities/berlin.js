let students = [
  {
    name: 'Alex Edwards',
    avatar: 'https://source.unsplash.com/7YVZYZeITc8/32x32'
  },
  {
    name: 'Gunther Ackner',
    avatar: 'https://source.unsplash.com/X6Uj51n5CE8/32x32'
  },
  {
    name: 'Nayah Tantoh',
    avatar: 'https://source.unsplash.com/mEZ3PoFGs_k/32x32'
  },
  {
    name: 'Roelof Bekkenenks',
    avatar: 'https://source.unsplash.com/n4KewLKFOZw/32x32'
  },
  {
    name: 'Cecilia Pozo',
    avatar: 'https://source.unsplash.com/B4TjXnI0Y2c/32x32'
  },
  {
    name: 'Jesús Moruga',
    avatar: 'https://source.unsplash.com/PQeoQdkU9jQ/32x32'
  },
  {
    name: 'Pan Feng',
    avatar: 'https://source.unsplash.com/0fN7Fxv1eWA/32x32'
  },
  {
    name: 'Juan Jose Esteve',
    avatar: 'https://source.unsplash.com/ILip77SbmOE/32x32'
  },
  {
    name: 'Salomé Fernán',
    avatar: 'https://source.unsplash.com/Js6Hwobewi8/32x32'
  },
  {
    name: 'Deependra Bardhan',
    avatar: 'https://source.unsplash.com/6W4F62sN_yI/32x32'
  },
  {
    name: 'Pok Ae-Ra',
    avatar: 'https://source.unsplash.com/Z_bTArFy6ks/32x32'
  },
  {
    name: 'Tamaki Ryushi',
    avatar: 'https://source.unsplash.com/u3WmDyKGsrY/32x32'
  },
  {
    name: 'Salomé Fernán',
    avatar: 'https://source.unsplash.com/pg_WCHWSdT8/32x32'
  },
  {
    name: 'Deependra Bardhan',
    avatar: 'https://source.unsplash.com/bqe0J0b26RQ/32x32'
  },
  {
    name: 'Pok Ae-Ra',
    avatar: 'https://source.unsplash.com/PY2lJbqsJzU/32x32'
  },
  {
    name: 'Tamaki Ryushi',
    avatar: 'https://source.unsplash.com/dXmXKPP2L4E/32x32'
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
    name: 'Mur de berlin',
    place: 'Lieu 1',
    price: '0€',
    url: 'https://source.unsplash.com/N2F6wXO1lgM/'
  },
  {
    name: 'Memorial',
    place: 'Lieu 2',
    price: '2€',
    url: 'https://source.unsplash.com/Bt1nqZWt4BM/'
  },
  {
    name: 'Jardin Tiergarten',
    place: 'Lieu 3',
    price: '4€',
    url: 'https://source.unsplash.com/TK5I5L5JGxY/'
  },
  {
    name: 'Souterrains',
    place: 'Lieu 4',
    price: '12€',
    url: 'https://source.unsplash.com/rmOwOGjYHdg/'
  },
  {
    name: 'Street art',
    place: 'Lieu 5',
    price: '43€',
    url: 'https://source.unsplash.com/P6NhhvGIL9k/'
  },
  {
    name: 'Porte de Brandebourg',
    place: 'Lieu 6',
    price: '12€',
    url: 'https://source.unsplash.com/0roGfghctac/'
  },
  {
    name: 'Tempelhof',
    place: 'Lieu 7',
    price: '22€',
    url: 'https://source.unsplash.com/cOUKgY3QRb0/'
  },
  {
    name: 'Berghain',
    place: 'Lieu 8',
    price: '8€',
    url: 'https://source.unsplash.com/1j1NFu6DkwE/'
  },
]


var navBar = document.getElementById('navbar');
document.onscroll = function () { 
        navBar.classList.add("nav-colored");
        navBar.classList.remove("transparent"); 
    } 
    




let heroNumbers = document.getElementById('hero-numbers');
heroNumbers.innerHTML += students.length + ' étudiants, ' + jobs.length + ' jobs' ;

let registeredStudents = document.getElementById('registered-students');
registeredStudents.innerHTML = students.length + " étudiants inscrits";

  let studentWrapperId = document.getElementById('students-wrapper');

  for (let i = 0; i < students.length; i++) {
    let item = document.createElement('div');
    item.classList.add('col', 'col-3');

    content = '<div class="user card-berlin-2">';
    content += '<span class="avatar"> <img src=" '+ students[i].avatar + '" alt="' + students[i].name + '"> </span>';
    content += '<h3 class="user-name">' + students[i].name + '</h3>';
    content += '</div>';
  ;

    item.innerHTML = content;
    studentWrapperId.appendChild(item);
  }

  let registeredStudentJobs = document.getElementById('registered-student-jobs');
  registeredStudentJobs.innerHTML = jobs.length + " jobs étudiants dans la ville";


  let studentJobsWrapperId = document.getElementById('student-jobs-wrapper');

  for (let i = 0; i < jobs.length; i++) {
    let item = document.createElement('div');
    item.classList.add('col', 'col-4');

    content = '<div class="card card-secondary card-berlin">';
    content += '<div class="jobs-title">'+ jobs[i].name + '</div>';
    content += '<div id="job-offer"><h5 id="job-enterprise">' + jobs[i].enterprise + '</h5> <div><p class="job-salary">' +jobs[i].salary + '</p> </div></div>';
    content += '</div>';
  ;

    item.innerHTML = content;
    studentJobsWrapperId.appendChild(item);
  }

  let registeredPlacesToVisit = document.getElementById('registered-places-to-visit');
  registeredPlacesToVisit.innerHTML = places.length + " lieux à visiter dans la ville ";


  let registeredPlacesWrapper = document.getElementById('registered-places-wrapper');

  for (let i = 0; i < places.length; i++) {
    let item = document.createElement('div');
    item.classList.add('col', 'col-4', 'col-places');

    content = '<div class="places-img">  <img src=" '+ places[i].url + '" alt="' + '"></div>';
    content += '<div id="places-titles">'+ places[i].name + '</div>';
    content += '<div id="place"><h5 id="location">' + places[i].place + '</h5> <div><p id="place-fee">' +places[i].price + '</p> </div>';
    content += '</div>';
  ;

    item.innerHTML = content;
    registeredPlacesWrapper.appendChild(item);
  }