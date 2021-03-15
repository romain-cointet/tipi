function showJobs(jobs) {
  let jobWrapper = document.getElementById('jobs-wrapper');

  for (let i = 0; i < jobs.length; i++) {
    let job = document.createElement('div');
    job.classList.add('col', 'col-3');

    let jobContent = '<a href="#" class="item job">';
    jobContent += '<div class="picture"><img src="img/' + jobs[i].image + '" alt="' + jobs[i].name + '"></div>';
    jobContent += '<h5>' + jobs[i].name + '</h5>';
    jobContent += '</a>';

    job.innerHTML = jobContent;
    jobWrapper.appendChild(job);
  }
}

function showEatings(eatings) {
  let eatingWrapper = document.getElementById('eating-wrapper');

  for (let i = 0; i < eatings.length; i++) {
    let plat = document.createElement('div');
    plat.classList.add('col', 'col-3');

    let platContent = '<a href="#" class="item plat">';

    if (i === 0) {
      platContent += '<div class="top">Top of <br>the week!</div>';
    }

    platContent += '<div class="picture"><img src="img/' + eatings[i].image + '" alt="' + eatings[i].name + '"></div>';
    platContent += '<h5>' + eatings[i].name + '</h5>';
    platContent += '</a>';

    plat.innerHTML = platContent;
    eatingWrapper.appendChild(plat);
  }
}

// La fonction showItems affichera en HTML les différents éléments du tableau
// Elle a besoin de trois paramètres:
// - items qui est le tableau d'éléments
// - wrapper qui est le nom de l'id qui contiendra nos éléments HTML
// - type qui est soit job soit plat
function showItems(items, wrapper, type) {
  let wrapperId = document.getElementById(wrapper);

  for (let i = 0; i < items.length; i++) {
    let item = document.createElement('div');
    item.classList.add('col', 'col-3');

    let content = '<a href="#" class="item ' + type + '">';

    if (wrapper === 'eating-wrapper') {
      if (i === 0) {
        content += '<div class="top">Top of <br>the week!</div>';
      }
    }

    content += '<div class="picture"><img src="img/' + items[i].image + '" alt="' + items[i].name + '"></div>';
    content += '<h5>' + items[i].name + '</h5>';
    content += '</a>';

    item.innerHTML = content;
    wrapperId.appendChild(item);
  }
}

function showVisits(visits, visited) {
  let visitsWrapper = document.getElementById('visits-wrapper');

  for (let i = 0; i < visits.length; i++) {
    let visit = document.createElement('div');
    visit.classList.add('card', 'card-secondary', 'visit');

    let intersection = visited.filter(x => visits.includes(x));

    for (let j = 0; j < intersection.length; j++) {
      if (visits[i] === intersection[j]) {
        visit.classList.add('visit-selected');
      }
    }

    let visitContent = '<h4>' + visits[i] + '</h4>';

    visit.innerHTML = visitContent;
    visitsWrapper.appendChild(visit);
  }
}


function showElements(obj, id, colNum, divClass1, divClass2, divClass3) {
  let wrapper = document.getElementById(id);
  console.log(obj);
  for (const element in obj) {
    var col = document.createElement('div');
    col.classList.add('col', 'col-' + colNum, divClass1, divClass2, divClass3);
    col.classList.remove("null");
    console.log(obj[element].name);
    switch (obj) {

      // OK
      case students:
        var content = '<div class="user mb-1">';
        content += '<span class="avatar"><img src="' + obj[element].avatar + '" alt=""></span>';
        content += '<h3 class="user-name">' + obj[element].name + '</h3>';
        content += '</div>';
        break;

        // WIP -col
      case jobs:
        var content = '<div class="card-body">';
        content += '<p class="job-entitled mb-1">' + obj[element].name + '</p>';
        content += '<div class="d-flex">';
        content += '<p class="job-society col col-6 p-0">' + obj[element].enterprise + '</p>';
        content += '<p class="job-society col col-6">' + obj[element].salary + '</p>';
        content += '</div>';
        content += '</div>';
        break;

        // An error occurs when generating random images from unsplash
      case places:
        var content = '<div class="card-img-top mb-1">';
        // content += '<img src="https://source.unsplash.com/random/400x130" alt="">';
        content += 'WIP';
        content += '</div>';
        content += '<div class="card-body">';
        content += '<p class="job-entitled mb-1">' + obj[element].name + '</p>';
        content += '<div class="d-flex">';
        content += '<p class="job-society col col-6 p-0">' + obj[element].place + '</p>';
        content += '<p class="job-salary col col-6">' + obj[element].price + '</p>';
        content += '</div>';
        content += '</div>';
        break;

      default:
        var content = '<p>Aucun objet trouvé</p>';
        console.log("Missing elements");
    }

    col.innerHTML = content;
    wrapper.appendChild(col);
  }
}
