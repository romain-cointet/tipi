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
    name: 'Mur de berlin',
    place: 'Lieu 1',
    price: '0€'
  },
  {
    name: 'Memoria',
    place: 'Lieu 2',
    price: '2€'
  },
  {
    name: 'Jardin Tiergarten',
    place: 'Lieu 3',
    price: '4€'
  },
  {
    name: 'Souterrains',
    place: 'Lieu 4',
    price: '12€'
  },
  {
    name: 'Street art',
    place: 'Lieu 5',
    price: '43€'
  },
  {
    name: 'Porte de Brandebourg',
    place: 'Lieu 6',
    price: '12€'
  },
  {
    name: 'Tempelhof',
    place: 'Lieu 7',
    price: '22€'
  },
  {
    name: 'Badeschiff',
    place: 'Lieu 8',
    price: '8€'
  },
]


let heroNumbers = document.getElementById('hero-numbers');
heroNumbers.innerHTML += students.length + ' étudiants, ' + jobs.length + ' jobs' ;

let registeredStudents = document.getElementById('registered-students');
registeredStudents.innerHTML = students.length + " étudiants inscrits";

  let studentWrapperId = document.getElementById('students-wrapper');

  for (let i = 0; i < students.length; i++) {
    let item = document.createElement('div');
    item.classList.add('col', 'col-3');

    content = '<div class="user">';
    content += '<span class="avatar"> <img src=" '+ students[i].avatar + '" alt="' + students[i].name + '"> </span>';
    content += '<h3 class="user-name">' + students[i].name + '</h3>';
    content += '</div>';
  ;

    item.innerHTML = content;
    studentWrapperId.appendChild(item);
  }

  let registeredStudentJobs = document.getElementById('registered-student-jobs');
  registeredStudentJobs.innerHTML = jobs.length + " jobs étudiants dans la ville ";


  let studentJobsWrapperId = document.getElementById('student-jobs-wrapper');

  for (let i = 0; i < jobs.length; i++) {
    let item = document.createElement('div');
    item.classList.add('col', 'col-4');

    content = '<div class="card card-secondary card-berlin">';
    content += '<div class="jobs-title">'+ jobs[i].name + '</div>';
    content += '<div><h5 class="job-enterprise">' + jobs[i].enterprise + ' <span class="job-salary">' +jobs[i].salary + '</span></h5> </div>';
    content += '</div>';
  ;

    item.innerHTML = content;
    studentJobsWrapperId.appendChild(item);
  }
