let randomAlbums = [];

window.onload = () => {
  generateRandom();
  getRandom();
};

function generateRandom() {
  for (let i = 0; i < 25; i++) {
    let randomId = Math.floor(100000 + Math.random() * 900000);
    randomAlbums.push(randomId);
  }
}

function getRandom() {
  for (let i = 0; i < randomAlbums.length; i++) {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/album/${randomAlbums[i]}`
    )
      .then((response) => response.json())
      .then((body) => loadAlbum(body));
  }
}
const recently_played = document.getElementById("recently_played");

function loadAlbum(body) {
  if (recently_played !== null) {
    let playListNode = document.createElement("a");
    playListNode.href = "album-page.html";
    playListNode.innerHTML += `   <div class="col album-card px-1">
              <div class="album-card-content">
                <img src="${body.cover_big}" alt="">
                <h5>${body.artist.name}</h5>
                <p>${body.type}</p>
              </div>
            </div>`;
    recently_played.appendChild(playListNode);
    playListNode.setAttribute("onclick", loadList(body.id));
  } else {
    console.error("null");
  }
}

const recent_album = document.getElementById("recent_album");

function loadList(id) {
  console.log(id);
}
