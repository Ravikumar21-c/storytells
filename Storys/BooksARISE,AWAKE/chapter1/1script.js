document.addEventListener('mousemove', (e) => {
    const awake = document.querySelector('.awake');
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    awake.style.transform = `rotateY(${x * 25}deg) rotateX(${-y * 25}deg)`;
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




