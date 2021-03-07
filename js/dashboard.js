/*
  Données
*/
let user = {
  name: 'Samia',
  avatar: 'avatar.png',
  city: 'Barcelone',
  visits: [
    'Parc olympique',
  ]
}

let lastJobs = [
  {
    name: 'Livreur de pizza à vélo',
    image: 'jobs/livreur.png',
  },
  {
    name: 'Rabatteur de bar',
    image: 'jobs/rabatteur.png',
  },
  {
    name: 'Traducteur de français',
    image: 'jobs/traducteur.png',
  },
  {
    name: 'Promeneur de chiens',
    image: 'jobs/promeneur.png',
  },
]

let topEating = [
  {
    name: 'Hot dogs',
    image: 'eating/hot-dog.png',
  },
  {
    name: 'Pizzas',
    image: 'eating/pizza.png',
  },
  {
    name: 'Burgers',
    image: 'eating/burger.png',
  },
  {
    name: 'Sushis',
    image: 'eating/sushi.png',
  },
]

let topVisits = [
  'Sagrada Familia',
  'Parc Guel',
  'Parc olympique',
  'Mont Juic',
]

/* Afficher le nom de l'utilisateur dans la navbar */
let userNameElement = document.getElementById('user-name');
userNameElement.textContent += user.name + '!';

/* Afficher la ville dans le h1 */
let cityElement = document.getElementById('city-title');
cityElement.children[0].innerHTML += user.city + '?';

/* Afficher les nouveaux jobs */
//showJobs(lastJobs);
showItems(lastJobs, 'jobs-wrapper', 'job');

/* Afficher les plats */
//showEatings(topEating);
showItems(topEating, 'eating-wrapper', 'plat');

/* Afficher les visites à faire */
showVisits(topVisits, user.visits);

/* Ajouter / Supprimer un spot visité */
let visits = document.getElementsByClassName('visit');

for(let i = 0; i < visits.length; i++) {
  visits[i].addEventListener('click', function(event) {
    let classes = event.currentTarget.className;
    let value = event.currentTarget.children[0].textContent;

    if (classes.includes('visit-selected')) {
      event.currentTarget.classList.remove('visit-selected');

      const index = user.visits.indexOf(value);
      if (index > -1) {
        user.visits.splice(index, 1);
      }
    } else {
      event.currentTarget.classList.add('visit-selected');
      user.visits.push(value)
    }
    console.log(user.visits)
  })
}

// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

