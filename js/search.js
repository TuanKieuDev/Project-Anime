let animes2 = JSON.parse(localStorage.getItem('animes'));

function search() {
    let searchAnime = document.getElementById('search-anime');
    let search = searchAnime.value;
    let result = animes2.filter(function(v){       
        return v.name.toLowerCase().includes(search.toLowerCase());
    });
    // window.location.href='anime.html'

    displayAnimes(result);
   
}

function enterSearch(e) {
    if(e.key === 'Enter'){
        e.preventDefault();
        search();
    }
}

function genresSearch(n) {
    let result = animes2.filter(function (v) {
        return v.genres.includes(n);
    });
    displayAnimes(result);
}

function yearSearch(n) {
    let result = animes2.filter(function(v) {
        if(n===v.year) return v.year;
    });
    displayAnimes(result);
}

// function search2() {   
//     window.location.href='list-item/anime.html';
//     search();
// }

// function enterSearch2(e) {
//     if(e.key === 'Enter'){
//         e.preventDefault();
//         search2();
//     }
// }


// function sortRate() {
//     let result = animes2.sort(compareValues('rate', 'desc'));
//     displayAnimes(result);
// }

let favorite = [];
function addFavorite(n) {
  let a = animes2.find(function(v){
    return v.name.includes(n);
  });
    favorite.push(a);
}


function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  
function sortRate() {
    let result = animes2.sort(compareValues('rate', 'desc'))
    displayAnimes(result)
}

function sortPopular() {
    let result = animes2.sort(compareValues('view', 'desc'))
    displayAnimes(result)
}

