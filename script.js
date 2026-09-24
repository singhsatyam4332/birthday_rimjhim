function openSurprise() {

    const surprise =
        document.getElementById("surprise");

    surprise.classList.remove("hidden");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();

}


/* PARTY */

let noCount = 0;


const messages = [

    "Awww 😭 Birthday girl, ek baar aur soch lo!",

    "Didi pleaseee 🥺 Birthday party toh banti hai!",

    "Itni achhi wishes ke baad bhi NO? 😭",

    "Final reminder: Party is still pending 👀",

    "Didi... ek baar YES bol do na 😭🎂"

];


function partyNo() {

    noCount++;

    const message =
        document.getElementById("partyMessage");

    message.textContent =
        messages[
            Math.min(
                noCount - 1,
                messages.length - 1
            )
        ];

}


function partyYes() {

    const message =
        document.getElementById("partyMessage");

    message.textContent =
        "YAYYYY! 🎉💗 Party officially approved! Ab date aur place decide karo 😌🍕";

    createConfetti();

}


/* CONFETTI */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("span");

        piece.className =
            "confetti-piece";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 0.7 + "s";

        piece.style.background =
            [
                "#d875a0",
                "#a875cf",
                "#f4b6c9",
                "#e8c7ff",
                "#ffd166"
            ][
                Math.floor(Math.random() * 5)
            ];

        container.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 3000);

    }

}