const songs = [
{
    name: "Amplifier",
    file: "music/Amplifier.mp3.mp3"
},
{
    name: "Bairan",
    file: "music/Bairan.mp3.mp3"
},
{
    name: "Bairi",
    file: "music/Bairi.mp3.mp3"
},
{
    name: "Bangles",
    file: "music/Bangles.mp3.mp3"
},
{
    name: "Dhurandhar - Title Track",
    file: "music/Dhurandhar - Title Track.mp3.mp3"
},
{
    name: "Dil Meri Na Sune",
    file: "music/Dil meri na sune.mp3.mp3"
},
{
    name: "Gulabi Sadi",
    file: "music/Gulabi sadi.mp3.mp3"
},
{
    name: "Kaali Bindi",
    file: "music/Kaali bindi.mp3.mp3"
},
{
    name: "Shaky Shaky",
    file: "music/Shaky shaky.mp3.mp3"
},
{
    name: "Sheesha",
    file: "music/Sheesha.mp3.mp3"
},
{
    name: "Sundari",
    file: "music/Sundari.mp3.mp3"
}
];

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playlist = document.getElementById("playlist");
const disc = document.getElementById("disc");

const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

let currentSong = 0;

function formatTime(seconds){

    const minutes = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

function loadSong(index){

    audio.src = songs[index].file;

    title.textContent = songs[index].name;

    audio.load();
}

loadSong(currentSong);

audio.addEventListener("loadedmetadata", () => {

    durationEl.textContent =
    formatTime(audio.duration);
});

playBtn.addEventListener("click", async () => {

    try{

        if(audio.paused){

            await audio.play();

            playBtn.innerHTML =
            '<i class="fas fa-pause"></i>';

            disc.classList.remove("pause");

        }else{

            audio.pause();

            playBtn.innerHTML =
            '<i class="fas fa-play"></i>';

            disc.classList.add("pause");
        }

    }catch(error){

        console.log("Audio Error:", error);
    }
});

nextBtn.addEventListener("click", async () => {

    currentSong++;

    if(currentSong >= songs.length){

        currentSong = 0;
    }

    loadSong(currentSong);

    await audio.play();

    playBtn.innerHTML =
    '<i class="fas fa-pause"></i>';

    disc.classList.remove("pause");
});

prevBtn.addEventListener("click", async () => {

    currentSong--;

    if(currentSong < 0){

        currentSong = songs.length - 1;
    }

    loadSong(currentSong);

    await audio.play();

    playBtn.innerHTML =
    '<i class="fas fa-pause"></i>';

    disc.classList.remove("pause");
});

audio.addEventListener("timeupdate", () => {

    if(!isNaN(audio.duration)){

        progress.max = audio.duration;

        progress.value = audio.currentTime;

        currentTimeEl.textContent =
        formatTime(audio.currentTime);

        durationEl.textContent =
        formatTime(audio.duration);
    }
});

progress.addEventListener("input", () => {

    audio.currentTime = progress.value;
});

volume.addEventListener("input", () => {

    audio.volume = volume.value;
});

songs.forEach((song, index) => {

    const div = document.createElement("div");

    div.classList.add("song");

    div.innerHTML = `<span>${song.name}</span>`;

    div.addEventListener("click", async () => {

        currentSong = index;

        loadSong(currentSong);

        await audio.play();

        playBtn.innerHTML =
        '<i class="fas fa-pause"></i>';

        disc.classList.remove("pause");
    });

    playlist.appendChild(div);
});

audio.addEventListener("ended", async () => {

    currentSong++;

    if(currentSong >= songs.length){

        currentSong = 0;
    }

    loadSong(currentSong);

    await audio.play();
});

audio.addEventListener("error", () => {

    console.error("Music file not found:", audio.src);

    alert(
        "Music file not found!\n\nCheck folder name and MP3 file names."
    );
});