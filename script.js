document.addEventListener("DOMContentLoaded", () => {

    /*
        ================================
        SCROLL / APPEAR ANIMATION
        ================================
    */

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elements.forEach((element) => {

        observer.observe(element);

    });


    /*
        ================================
        SMALL MOUSE PARALLAX EFFECT
        ================================
    */

    const glows = document.querySelectorAll(".glow");

    document.addEventListener("mousemove", (event) => {

        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        glows.forEach((glow, index) => {

            const power = (index + 1) * 10;

            glow.style.transform =
                `translate(${x * power}px, ${y * power}px)`;

        });

    });


    /*
        ================================
        RANDOM SAKURA PARTICLES
        ================================
    */

    const particlesContainer =
        document.querySelector(".particles");


    for (let i = 0; i < 18; i++) {

        const particle =
            document.createElement("div");

        particle.innerHTML = "✦";

        particle.style.position = "absolute";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.fontSize =
            `${8 + Math.random() * 8}px`;

        particle.style.opacity =
            `${0.1 + Math.random() * 0.3}`;

        particle.style.color =
            "rgba(255, 180, 225, 0.7)";

        particle.style.animation =
            `floatParticle ${6 + Math.random() * 8}s infinite ease-in-out`;

        particle.style.animationDelay =
            `${Math.random() * 5}s`;

        particlesContainer.appendChild(particle);

    }

});


/*
    Particle animation
*/

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatParticle {

    0% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-25px) rotate(180deg);
    }

    100% {
        transform: translateY(0px) rotate(360deg);
    }

}

`;

document.head.appendChild(style);
