let animes2 = JSON.parse(localStorage.getItem('animes'));

function displayAnimes(listAnimes){
    let domAnime = document.getElementById('animes');
    domAnime.innerHTML = '';

    for (const anime of listAnimes) {
        let html = `
        <div class="card col-4 p-3" style="width: 18rem;">
            <div class="text-center">
                <img src="${anime.img}"
                    class="card-img-top cursor-p" onclick="viewDetail('${anime.name}')" alt="${anime.name}">
            </div>
            <div class="card-body">
                <h5 class="card-title cursor-p" onclick="viewDetail('${anime.name}')" >
                    ${anime.name}
                </h5>
                <h6 class="text-danger">
                    ${anime.rate} <br>
                   
                </h6>
                <p class="card-text">${getShortDescription(anime.description)}</p>
                <button onclick="viewDetail('${anime.name}')" class="btn btn-primary">Play</button>
            </div>
        </div>
        `;
        domAnime.innerHTML += html;
    }
}


function search() {
    let searchAnime = document.getElementById('search-anime');
    let search = searchAnime.value;
    let result = animes2.filter(function(v){
        return v.toLowerCase().includes(search.toLowerCase());
    });
    displayAnimes(result);
}

function enterSearch(e) {
    if(e.key === 'Enter'){
        search();
    }
}

