/* Global variables 🌍 */
const albumOverview = document.querySelector('.album-overview')
const tracklistDiv = document.querySelector('.tracklist')
let tracks = []

/* end */

window.onload = () => {
    getMusic()
}

//getMusic triggers displayAlbumOverview and displayTracklist
function getMusic(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    .then((response) => {
        //console.log(response) //body: ReadableStream 
        //console.log(response.json()) // Promise {<pending>}

        return response.json() // ✨ return ✨

    }).then((jsonAlbum) => { 
        console.log(jsonAlbum) //object

        displayAlbumOverview(jsonAlbum)
        displayTracklist(jsonAlbum.tracks.data)
    })
}

const displayAlbumOverview = function(object){
    albumOverview.innerHTML = `
        <div class="album-cover-info d-flex justify-content-start align-items-center">
            <div class="album-cover">
                <img src=${object.artist.picture} alt="acdc">
            </div>

            <div class="album-title d-flex flex-column justify-content-end align-items-start pl-3">
                <p class="album mb-0">${object.title}</p>
                <h2>${object.artist.name}</h2>
                <div class="album-infos-wrapper d-flex justify-content-start align-items-center">
                    <div class="artist-img">
                        <img src="assets/diego.jpg" alt="">
                    </div>
                    <div class="list pl-2">
                        <span>${object.artist.name}</span>
                        <span>2020</span>
                    </div>
                </div>
            </div>
        </div>
        `;
}


const displayTracklist = function(array){

    array.forEach(track => {
        tracklistDiv.innerHTML +=  
        `
        <div class="track--container d-flex justify-content-between align-items-center my-2">
            <div class="track-num-title">
                <div class="row align-items-center pt-1">
                    <div class="col-1 track-number">
                       <span>1</span>
                     </div>
                    <div class="col track-info px-0"> <!--titolo e artista-->
                       <h6 class="track-title mb-0">${track.title}</h6>
                       <a class="track-artist mb-0">${track.artist.name}</a>
                    </div>
                </div>
            </div>
   
            <div class="track-length">
                <span>${track.duration}</span>
            </div>
   
        </div>
        `  
    });
}


const audioToPlay = document.getElementById('player')
     
const playAudio = function() {
       const playButton = document.getElementById('play-me')
       playButton.classList.toggle('playing')
       
       if (playButton.classList.contains('playing') === true) {
         audioToPlay.play()
       } else {
         audioToPlay.pause()
       }
}
audioToPlay.ontimeupdate()


const heart = document.getElementById('heart')    
heart.addEventListener('click', function() {
        heart.classList.toggle('green')
})


// for (let song of jsonTracks.data) {

//     parentDiv.innerHTML += `
//     <div class="track--container d-flex justify-content-between align-items-center my-2">

//             <div class="track-num-title">
//               <div class="row align-items-center pt-1">
//                 <div class="col-1 track-number"> <!--numero-->
//                   <span>${song.number}</span>
//                 </div>
//                 <div class="col track-info px-0"> <!--titolo e artista-->
//                   <h6 class="track-title mb-0">${song.title}</h6>
//                   <p class="track-artist mb-0"><a>${song.artist}</a></p>
//                 </div>
//               </div>
//             </div>

//             <div class="track-length">
//               <span></span>
//             </div>

//      </div>
//     `
