document.addEventListener('mousemove', (e) => {
    const content1 = document.querySelector('.content1');
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    content1.style.transform = `rotateY(${x * 25}deg) rotateX(${-y * 25}deg)`;
});

document.addEventListener('mousemove', (e) => {
    const content2 = document.querySelector('.content2');
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    content2.style.transform = `rotateY(${x * 25}deg) rotateX(${-y * 25}deg)`;
});

document.addEventListener('mousemove', (e) => {
    const content0 = document.querySelector('.content0');
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    content0.style.transform = `rotateY(${x * 50}deg) rotateX(${-y * 25}deg)`;
});


/* JavaScript for Scrolling Effect */
document.addEventListener("scroll", function () {
    let container = document.querySelector(".container1");
    let scrollPosition = window.scrollY;
    
    // Move the container from right to left as you scroll down
    container.style.transform = `translateY(${-scrollPosition / 1}px)`;
});



const spotlight = document.createElement('div');
spotlight.classList.add('spotlight');
document.body.appendChild(spotlight);

document.addEventListener('mousemove', (e) => {
    const spotlightSize = 150; // Size of the spotlight

    const x = e.clientX - spotlightSize / 2;
    const y = e.clientY - spotlightSize / 2;

    spotlight.style.left = `${x}px`;
    spotlight.style.top = `${y}px`;
    spotlight.style.width = `${spotlightSize}px`;
    spotlight.style.height = `${spotlightSize}px`;
});




