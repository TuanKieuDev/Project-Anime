let selectedName = localStorage.getItem('selected');
let animes = JSON.parse(localStorage.getItem('animes'));

let anime = animes.find(function (p) {
    return p.name === selectedName;
});

document.getElementById('anime-name').innerHTML = anime.name;
document.getElementById('anime-rate').innerHTML = anime.rate ;
document.getElementById('anime-img').src = anime.img;
document.getElementById('anime-des').innerHTML = anime.description;
document.getElementById('anime-genres').innerHTML = anime.genres;
document.getElementById('anime-year').innerHTML = anime.year;
document.getElementById('anime-status').innerHTML = anime.status;

function getRelative() {
    let relative = document.getElementById('relative');
    relative.innerHTML = '';
    let animeDisplayed = [];
    for (let i = 0; i < 4; i++) {

        let r = getRndInteger(0, animes.length);
        while(animeDisplayed.includes(r)){
            r = getRndInteger(0, animes.length);
        }
        animeDisplayed.push(r);
        let p = animes[r];
        let html = `
            <div onclick="viewDetail('${p.name}')" class="phone-relative col-md-3 col-sm-6 mb-4 text-center">
                <img class="img-fluid" src="${p.img}" alt="">
                <p class="mt-2 font-weight-bold">${p.name}</p>
            </div>
        `;
        relative.innerHTML += html;
    }
}
getRelative();

function viewDetail(name){
    localStorage.setItem('selected', name);
    window.location.href = 'detail.html';
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }