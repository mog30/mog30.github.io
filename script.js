document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOADING SCREEN
    ====================================================== */

    const loader =
        document.getElementById("loader");


    window.addEventListener("load", () => {

        setTimeout(() => {

            document.body.classList.add("loaded");

            loader.classList.add("hidden");

        }, 1700);

    });



    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });



    /* =====================================================
       CUSTOM CURSOR
    ====================================================== */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorGlow =
        document.querySelector(".cursor-glow");


    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;


    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;

        mouseY = event.clientY;


        cursorDot.style.left =
            `${mouseX}px`;

        cursorDot.style.top =
            `${mouseY}px`;

    });


    function animateCursor() {

        glowX +=
            (mouseX - glowX) * 0.09;

        glowY +=
            (mouseY - glowY) * 0.09;


        cursorGlow.style.left =
            `${glowX}px`;

        cursorGlow.style.top =
            `${glowY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();



    /* =====================================================
       CURSOR HOVER EFFECT
    ====================================================== */

    const interactiveElements =
        document.querySelectorAll(
            "a, .tag, .info-card"
        );


    interactiveElements.forEach((element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorDot.style.width =
                    "11px";

                cursorDot.style.height =
                    "11px";

                cursorGlow.style.transform =
                    "translate(-50%, -50%) scale(1.25)";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursorDot.style.width =
                    "7px";

                cursorDot.style.height =
                    "7px";

                cursorGlow.style.transform =
                    "translate(-50%, -50%) scale(1)";

            }
        );

    });



    /* =====================================================
       BACKGROUND PARALLAX
    ====================================================== */

    const glows =
        document.querySelectorAll(
            ".background-glow"
        );


    const animeArt =
        document.getElementById(
            "animeArt"
        );


    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                event.clientX /
                window.innerWidth -
                0.5;

            const y =
                event.clientY /
                window.innerHeight -
                0.5;


            glows.forEach(
                (glow, index) => {

                    const strength =
                        (index + 1) * 10;


                    glow.style.transform =
                        `translate(
                            ${x * strength}px,
                            ${y * strength}px
                        )`;

                }
            );


            if (animeArt) {

                animeArt.style.transform =
                    `translate(
                        ${x * -8}px,
                        ${y * -5}px
                    )`;

            }

        }
    );



    /* =====================================================
       SAKURA GENERATOR
    ====================================================== */

    const sakuraContainer =
        document.getElementById(
            "sakuraContainer"
        );


    function createSakura() {

        const petal =
            document.createElement("div");


        petal.classList.add(
            "sakura"
        );


        /*
            Start somewhere around
            the upper-left corner.
        */

        const startX =
            -30 +
            Math.random() * 90;


        const startY =
            -30 -
            Math.random() * 50;


        /*
            End point.
            This creates the feeling
            of wind blowing diagonally.
        */

        const endX =
            window.innerWidth *
            (0.25 + Math.random() * 0.75);


        const endY =
            window.innerHeight *
            (0.5 + Math.random() * 0.6);


        const midX =
            endX * 0.42;


        const midY =
            endY * 0.38;


        const duration =
            9000 +
            Math.random() * 9000;


        const opacity =
            0.25 +
            Math.random() * 0.4;


        const rotateMid =
            180 +
            Math.random() * 300;


        const rotateEnd =
            360 +
            Math.random() * 600;


        petal.style.left =
            `${startX}px`;

        petal.style.top =
            `${startY}px`;

        petal.style.setProperty(
            "--end-x",
            `${endX}px`
        );

        petal.style.setProperty(
            "--end-y",
            `${endY}px`
        );

        petal.style.setProperty(
            "--mid-x",
            `${midX}px`
        );

        petal.style.setProperty(
            "--mid-y",
            `${midY}px`
        );

        petal.style.setProperty(
            "--duration",
            `${duration}ms`
        );

        petal.style.setProperty(
            "--opacity",
            opacity
        );

        petal.style.setProperty(
            "--rotate-mid",
            `${rotateMid}deg`
        );

        petal.style.setProperty(
            "--rotate-end",
            `${rotateEnd}deg`
        );


        /*
            Slight random size.
        */

        const size =
            5 + Math.random() * 6;


        petal.style.width =
            `${size}px`;

        petal.style.height =
            `${size * 1.35}px`;


        sakuraContainer.appendChild(
            petal
        );


        /*
            Remove after animation.
        */

        setTimeout(
            () => {

                petal.remove();

            },

            duration + 500
        );

    }



    /*
        Generate one leaf every
        1.8 - 4.5 seconds.

        This keeps the effect
        subtle instead of becoming
        a screen full of petals.
    */

    function scheduleSakura() {

        const delay =
            1800 +
            Math.random() * 2700;


        setTimeout(() => {

            createSakura();

            scheduleSakura();

        }, delay);

    }


    /*
        Only start after page load.
    */

    setTimeout(
        scheduleSakura,
        2200
    );

});
