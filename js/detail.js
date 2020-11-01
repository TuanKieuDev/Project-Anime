let selectedName = localStorage.getItem('selected');
let animes = JSON.parse(localStorage.getItem('animes'));

let anime = animes.find(function (p) {
    return p.name === selectedName;
});
anime.view++;
localStorage.setItem('animes', JSON.stringify(animes));

document.getElementById('anime-name').innerHTML = anime.name;
document.getElementById('anime-rate').innerHTML = anime.rate ;
document.getElementById('anime-img').src = anime.img;
document.getElementById('anime-des').innerHTML = anime.description;
document.getElementById('anime-genres').innerHTML = anime.genres;
document.getElementById('anime-year').innerHTML = anime.year;
document.getElementById('anime-status').innerHTML = anime.status;
document.getElementById('anime-video').src = anime.video;
document.getElementById('anime-view').innerHTML = anime.view ;

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

// function demo() {
//     let vid = document.getElementById('anime-video');
//     vid.innerHTML = '';
//     let k = 0;
//     for (let i = 0; i < animes.length; i++) {
//         let element = animes[i];
//         let phim = `<iframe width="560" height="315" src="${element.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
//         vid.innerHTML = phim;
//     }
// }

// demo();
getRelative();

function viewDetail(name){
    localStorage.setItem('selected', name);
    window.location.href = 'detail.html';
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  

let listComments = [];
function addComment() {

    let commentDom = document.getElementById('noi-dung');
    let comment = commentDom.value.trim();
    if(comment===''){
        return;
    }
    commentDom.value = '';
    listComments.push(comment);
    listComments.reverse();
    displayListComments(listComments);

}

function displayListComments(binhluan) {
    let listCommentsDom = document.getElementById('display');
    listCommentsDom.innerHTML = '';
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    for (let i = 0; i < binhluan.length; i++) {
        const commentName = binhluan[i];
        listCommentsDom.innerHTML += `<br><h4>Guess (${date}-${time}): ${commentName}</h4>`;
    }
}

function enterComment(e) {
    if(e.key==='Enter'){
        addComment();
    }
}

function chamDiem(n) {
    let diem = document.getElementsByName("rate");
    if(n==1) alert(`You voted 1 star`);
    else alert(`You voted ${n} stars`);
}