// select -> stock
const refresh = document.getElementById('refresh');
const resultat = document.getElementById('resultat');

async function getImg(){
    // console.log('test depuis getImg');
    try{
        const reponseJSON = await fetch("https://api.unsplash.com/photos/random?client_id=1fJs_V9GimWNvI8a6PJT1zGzmGNdfo2WFR5Nyx56Wjw");
        console.log(reponseJSON);
         // JS translate 
    const reponseJS = await reponseJSON.json();
    // HTML integration
    resultat.innerHTML = 
    `
    <img class="img-artist" src="${reponseJS.urls.regular}" alt="${reponseJS.description}"/>
    <h1>Artiste : ${reponseJS.user.name}</h1>
    <p> Découvrez son univers : ${reponseJS.user.bio?reponseJS.user.bio : "Désolée, l'information est manquante"} </p>
    <div class="btn">
    <a class="btn-insta" href="https://instagram.com/${reponseJS.user.instagram_username}">
    Je découvre sur Instagram
    </a>
    </div>
    `
    }
    catch(error){
console.log(error, "erreur");
    }
}

refresh.addEventListener('click', getImg);

getImg();