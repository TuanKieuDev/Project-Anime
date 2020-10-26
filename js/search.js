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

