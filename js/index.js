/*
  Données
*/
const allCities = [
  {
    name: 'Paris',
    img: 'paris.png',
    url: '/paris.html',
    jobs: 86,
    students: 8000,
    colocations: 364
  },
  {
    name: 'London',
    img: 'london.png',
    url: '/london.html',
    jobs: 103,
    students: 12000,
    colocations: 162
  },
  {
    name: 'Madrid',
    img: 'madrid.png',
    url: '/madrid.html',
    jobs: 69,
    students: 6900,
    colocations: 372
  },
  {
    name: 'Barcelona',
    img: 'barcelona.png',
    url: '/barcelona.html',
    jobs: 132,
    students: 4200,
    colocations: 387
  },
  {
    name: 'Lisboa',
    img: 'lisboa.png',
    url: '/lisboa.html',
    jobs: 99,
    students: 5100,
    colocations: 152
  },
  {
    name: 'Berlin',
    img: 'berlin.png',
    url: '/berlin.html',
    jobs: 164,
    students: 8300,
    colocations: 233
  },
  {
    name: 'Rome',
    img: 'rome.png',
    url: '/rome.html',
    jobs: 32,
    students: 1276,
    colocations: 62
  },
  {
    name: 'Venise',
    img: 'venice.png',
    url: '/venise.html',
    jobs: 19,
    students: 853,
    colocations: 21
  }
]


/*
  Ajout du top 5 villes
*/

// On récupère l'élément html qu contiendra nos villes
let citiesWrapper = document.getElementById('cities-wrapper');

// On récupère les 5 villes avec le plus d'étudiants
// le [...allCities] permet de cloner le tableau allCities
let top5cities = [...allCities].sort(function(city1, city2) {
  return city1.students - city2.students;
})

// On inverse le tableau pour avoir du plus grand au plus petit
top5cities = top5cities.reverse();
console.log(top5cities)
// On ne garde que les 5 premiers résultats
top5cities = top5cities.slice(0,5);
console.log(top5cities)

// On effectue une boucle sur le tableau des villes pour les ajouter dans le DOM
for( let i = 0; i < top5cities.length; i++) {
  // On crée un élément racine div pour notre ville
  let item = document.createElement('div');
  // On lui ajoute sa classe "item"
  item.classList.add('item');

  // On récupère les infos de la ville à afficher
  let imgUrl = 'img/cities/' + top5cities[i].img;
  let imgAlt = top5cities[i].name + ': ' + top5cities[i].students + ' students, ' + top5cities[i].jobs + ' jobs';
  // On écrit le code html pour l'élément de la ville
  let itemContent = '<div class="card card-primary"><a href="https://tipi.com' + top5cities[i].url + '"><img src="' + imgUrl + '" alt="' + imgAlt + '"></div>';

  // On ajoute le contenu html à notre élément racine
  item.innerHTML = itemContent;
  // On ajoute notre élément à l'élément parent qui contiendra toutes nos villes
  citiesWrapper.appendChild(item);

}

/*
  Ajout des statistiques
*/
// On récupère l'élément html qui contiendra les stats
let statsWrapper = document.getElementById('stats-wrapper');

// On déclare les variables des stats

let stats = {
  cities: 0,
  colocations: 0,
  jobs: 0,
  students: 0
}
// On ajoute le nombre de villes aux stats
stats.cities = allCities.length;

// on va calculer les autres stats
for (let i = 0; i < allCities.length; i++) {
  // Nombre de colocations
  stats.colocations += allCities[i].colocations;
  // Nombre de jobs
  stats.jobs += allCities[i].jobs;
  // Nombre d'étudiants
  stats.students += allCities[i].students;
}

// On ajoute les stats au html
let div1 = document.createElement('div');
div1.classList.add('card','card-secondary');
div1.innerHTML = '<h4>' + stats.cities + ' cities</h4>'
statsWrapper.appendChild(div1)

let div2 = document.createElement('div');
div2.classList.add('card','card-secondary');
div2.innerHTML = '<h4>' + stats.colocations + ' flatsharings</h4>'
statsWrapper.appendChild(div2)

let div3 = document.createElement('div');
div3.classList.add('card','card-secondary');
div3.innerHTML = '<h4>' + stats.jobs + ' jobs</h4>'
statsWrapper.appendChild(div3)

let div4 = document.createElement('div');
div4.classList.add('card','card-secondary');
div4.innerHTML = '<h4>' + stats.students + ' students</h4>'
statsWrapper.appendChild(div4)


/*
  Ajout de la première ville
*/
// On récupère la premiere ville dans le top 5 donc le premier élément du tableau
let topCity = top5cities.slice(0,1);
topCity = topCity[0];
// On cible l'élément html de la premiere ville
let topCityWrapper = document.getElementById('best-city');
// On récupère les éléments html enfants (les deux col)
let children = topCityWrapper.children
// On ajoute l'image de la ville dans la premiere col
let img = document.createElement('img');
img.setAttribute('src', 'img/cities/' + topCity.img)
img.setAttribute('alt', topCity.name)
children[0].appendChild(img);
// On ajoute les infos de la ville dans la deuxieme col
// Nom de la ville
let cityTitle = document.createElement('h5');
cityTitle.textContent = topCity.name;
children[1].appendChild(cityTitle);
// Sous titre
let citySubtitle = document.createElement('p');
citySubtitle.classList.add('subtitle');
citySubtitle.textContent = 'Elected first student city';
children[1].appendChild(citySubtitle);
// Infos
let cityInfos = document.createElement('p');
cityInfos.innerHTML = topCity.students + ' students <br>' + topCity.jobs + ' jobs';
children[1].appendChild(cityInfos);
// Bouton Découvrir
let discoverButton = document.createElement('a');
discoverButton.classList.add('button', 'button-click');
discoverButton.setAttribute('href', 'https://tipi.com'+topCity.url)
discoverButton.textContent = 'Discover'
children[1].appendChild(discoverButton);


/*
  Ajout de l'événement au click sur le bouton découvrir
*/
let overlay = document.getElementById('overlay');
let modal = document.getElementById('modal');



let buttonClick = document.getElementsByClassName('button-click');
buttonClick[0].addEventListener('click', function(event) {
  // On annule la redirection
  event.preventDefault();
  overlay.style.display = 'block';

})

let closeButton = document.getElementById('button-close');
closeButton.addEventListener('click', function(event) {
  overlay.style.display = 'none';
})