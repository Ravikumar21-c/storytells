let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})



function scrollToContent() {
    window.scrollTo({
        top: window.innerHeight, // Scroll to the next section
        behavior: 'smooth'
    });
}



// Select all the buttons inside the books container
const buttons = document.querySelectorAll('.books button');

// Add event listener for each button to handle click actions
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Change the button text after it’s clicked
        button.innerText = "Reading...";

        // Optionally, show a message or perform an action
        setTimeout(() => {
            alert('Enjoy your reading!');
            button.innerText = 'Read it'; // Reset the button text after alert
        }, 2000);
    });
});

/* JavaScript for Scrolling Effect */
document.addEventListener("scroll", function () {
    let container = document.querySelector(".container1");
    let scrollPosition = window.scrollY;

    // Move the container from right to left as you scroll down
    container.style.transform = `translateX(${-scrollPosition / 0.5000}px)`;
});



// Load saved note pad from local storage
window.onload = function () {
    const savedNote = localStorage.getItem('userNote');
    if (savedNote) {
        document.getElementById('note').value = savedNote;
    }
};

//search bar
function performSearch() {
    const query = document.getElementById('search').value;
    if (query) {
        alert(`You searched for: ${query}`);
    } else {
        alert('Please enter a search query.');
    }
}

// Save note to local storage
function saveNote() {
    const note = document.getElementById('note').value;
    localStorage.setItem('userNote', note);
    alert('Note saved successfully!');
}

//Audiobooks
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const playPauseButton = document.getElementById('playPause');
const cover = document.getElementById('cover');

const tracks = [
    { src: '/audio/1.mp3', cover: '/img/images.png' },
    { src: '/audio/2.mp3', cover: 'https://res.cloudinary.com/dfpoitmva/image/upload/v1744175934/table_bg_hfdzoh.jpg' },
    { src: '/audio/3.mp3', cover: 'https://res.cloudinary.com/dfpoitmva/image/upload/v1744176021/3p_ish40q.jpg' },
    { src: '/audio/4.mp3', cover: 'https://res.cloudinary.com/dfpoitmva/image/upload/v1744175969/logo_fmwt9r.png' }
];

let currentTrack = 0;

function loadTrack(index) {
    audio.src = tracks[index].src;
    cover.src = tracks[index].cover;
    audio.load();
    togglePlay(true);
}

function togglePlay(forcePlay = false) {
    if (audio.paused || forcePlay) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
}

audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
});

progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

loadTrack(currentTrack);

document.addEventListener("scroll", function () {
    let playercontainer = document.querySelector(".playercontainer");
    let scrollPosition = window.scrollY;

    // Move the container from right to left as you scroll down
    playercontainer.style.transform = `translatex(${scrollPosition / 15}px)`;
});

document.addEventListener("scroll", function () {
    let notpad = document.querySelector(".notpad");
    let scrollPosition = window.scrollY;

    // Move the container from right to left as you scroll down
    notpad.style.transform = `translatex(${-scrollPosition / 15}px)`;
});

