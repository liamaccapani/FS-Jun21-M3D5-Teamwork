window.onload = () => {
  generateRandomId();
  console.log(randomIds);
  getRandomAlbum();
  console.log(albumsData);
  displayHomepage(albumsData);
};

// Global Variables
let randomIds = [];
let albumsData = [];

// Generating random albums ID and pushing it into randomIds array
function generateRandomId() {
  for (let i = 0; i < 25; i++) {
    let randomId = Math.floor(100000 + Math.random() * 900000);
    randomIds.push(randomId);
  }
}

// Fetching albums data using randomId and pushing data into albumsData array
function getRandomAlbum() {
  for (let i = 0; i < randomIds.length; i++) {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/album/${randomIds[i]}`
    )
      .then((response) => response.json())
      .then((recivedAlbums) => {
        albumsData.push(recivedAlbums);
      })
      .then((data) => displayHomepage(data))
      .catch((err) => console.log(err));
  }
}

// Displaying data on Homepage
const recently_played = document.getElementById("recently_played");
function displayHomepage(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    if (!data[i].error) {
      let creatElement = document.createElement("a");
      creatElement.innerHTML += `
    <div class="col album-card px-1">
            <div class="album-card-content">
              <img src="${data[i].cover_big}" alt="">
              <h5></h5>
              <p></p>
            </div>
          </div>
    `;
      recently_played.appendChild(creatElement);
    } else {
      console.error("error");
    }
  }
}

// let playListNode = document.createElement("a");
// playListNode.href = "album-page.html";
// playListNode.innerHTML += `   <div class="col album-card px-1">
//         <div class="album-card-content">
//           <img src="${data.cover_big}" alt="">
//           <h5>${data.artist.name}</h5>
//           <p>${data.type}</p>
//         </div>
//       </div>`;
// recently_played.appendChild(playListNode);
