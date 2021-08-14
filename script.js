window.onload = () => {
  generateRandom();
  albumsData(randomIdsArr);
};

let randomIdsArr = [];
const homepage_albumsContainer = document.getElementById("homepage_albums");

function generateRandom() {
  for (let i = 0; i < 25; i++) {
    let randomId = Math.floor(100000 + Math.random() * 900000);
    randomIdsArr.push(randomId);
  }
}

function albumsData(arr) {
  arr.forEach((element) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${element}`)
      .then((response) => response.json())
      .then((album) => displayAlbumOnHomepage(album));
  });
}

function displayAlbumOnHomepage(body) {
  console.log(body);
  let playListNode = document.createElement("a");
  playListNode.href = `album-page.html?id=${body.id}&name=${body.title}&artist=${body.artist.name}`;
  playListNode.innerHTML += `   <div class="col album-card px-1">
              <div class="album-card-content">
                <img src="${body.cover_big}" alt="">
                <h5>${body.title}</h5>
                <p>${body.artist.name}</p>
              </div>
            </div>`;
  homepage_albumsContainer.appendChild(playListNode);
}
