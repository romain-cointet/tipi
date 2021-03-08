/*
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

    if(i === 0) {
      platContent += '<div class="top">Top of <br>the week!</div>';
    }

    platContent += '<div class="picture"><img src="img/' + eatings[i].image + '" alt="' + eatings[i].name + '"></div>';
    platContent += '<h5>' + eatings[i].name + '</h5>';
    platContent += '</a>';

    plat.innerHTML = platContent;
    eatingWrapper.appendChild(plat);
  }
}
*/



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


function showElements(obj, id, divClass1, divClass2) {
  let wrapper = document.getElementById(id);
  for (const element in obj) {
    var col = document.createElement('div');
    col.classList.add(divClass1, divClass2);
    switch (obj) {

      case rome - students - wrapper:
        var content = '<a href="#" class="item job">';
        content += '<div class="picture"><img src="img/' + obj[element].image + '" alt="' + obj[element].name + '"></div>';
        content += '<h5>' + obj[element].name + '</h5>';
        content += '</a>';
        break;

      case rome - jobs - wrapper:
        if (obj[element].rating == 1) {
          var topOfTheWeek = '<div class="top"> Top of <br> the week! </div>';
        } else {
          var topOfTheWeek = '';
        }
        var content = '<a href="#" class="item plat">';
        content += topOfTheWeek;
        content += '<div class="picture"><img src="img/' + obj[element].image + '" alt="' + obj[element].name + '"></div>';
        content += '<h5>' + obj[element].name + '</h5>';
        content += '</a>';
        break;

      case rome - locations - wrapper:
        for (var i = 0; i < user.visits.length; i++) {
          col.classList.add('visit');
          if (user.visits[i] == obj[element]) {
            col.classList.add('visit-selected');
          }
        }
        var content = '<h4>' + obj[element] + '</h4>';
        break;
      default:
        var content = '<p>Aucun objet trouvé</p>';
        console.log("Missing elements");
    }

    col.innerHTML = content;
    wrapper.appendChild(col);
  }
}