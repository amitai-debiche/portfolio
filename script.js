
document.addEventListener('DOMContentLoaded', () => {
    let activeStars = 0;
    const maxStars = 3; // Maximum number of shooting stars on the screen at once

    const createShootingStar = () => {
        if (activeStars < maxStars) {
            const star = document.createElement('div');
            star.classList.add('shooting-star');

            // Generate random start and end positions
            const startTop = Math.random() * window.innerHeight;
            const startLeft = Math.random() * window.innerWidth;
            const endTop = startTop + Math.random() * 500 - 300; // random variation
            const endLeft = startLeft + Math.random() * 500 - 300; // random variation

            // Calculate the angle of the shooting star
            const deltaY = endTop - startTop;
            const deltaX = endLeft - startLeft;
            const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI + 90; // rotate to make the trail follow the star

            star.style.setProperty('--start-top', `${startTop}px`);
            star.style.setProperty('--start-left', `${startLeft}px`);
            star.style.setProperty('--end-top', `${endTop}px`);
            star.style.setProperty('--end-left', `${endLeft}px`);
            star.style.setProperty('--angle', `${angle}deg`);

            document.body.appendChild(star);
            activeStars++;
            console.log(`Star created: start(${startTop}, ${startLeft}), end(${endTop}, ${endLeft}), angle(${angle}deg)`);

            // Remove the star after animation completes
            star.addEventListener('animationend', () => {
                star.remove();
                activeStars--;
                console.log('Star removed');
            });
        }

        clearTimeout(createShootingStar);

        // Create new shooting stars at intervals
        setTimeout(createShootingStar, Math.random() * 3000 + 1000); // random interval between 2 and 5 seconds
    };

    createShootingStar();
});
