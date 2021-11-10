
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


/*background-squares*/

const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 20; i++){
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 80));
    const position = random(1, 89);
    const delay = random(5,  0.1);
    const duration = random(24, 12);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

    ulSquares.appendChild(li);
};

