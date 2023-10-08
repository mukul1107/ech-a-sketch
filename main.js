const root = document.querySelector("#root");
const btn = document.querySelector("#root > button");
const heading = document.querySelector("#dis")
let isTouching = false; // To track touch interaction

function changeColor(sqr) {
    sqr.style.backgroundColor = "black";
    sqr.style.color = "black";
}

function handleTouchMove(event) {
    if (isTouching) {
        const touchedElement = document.elementFromPoint(
            event.touches[0].clientX,
            event.touches[0].clientY
        );

        if (touchedElement && touchedElement.classList.contains("squares")) {
            changeColor(touchedElement);
        }

        event.preventDefault()
    }
}

function generateGrid(num = 16, className = "active") {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const sqr = document.createElement("div");
            sqr.classList.add("squares");
            sqr.classList.add(className);

            // Add event listener for hover (for desktop)
            sqr.addEventListener("mouseover", () => {
                changeColor(sqr);
            });

            // Add event listener for click (for touch devices)
            sqr.addEventListener("click", () => {
                changeColor(sqr);
            });

            root.appendChild(sqr);
            heading.textContent = "Move over the Boxes to draw!"
            btn.remove();
        }
    }
}

// Add event listeners for touch interaction
root.addEventListener("touchstart", () => {
    isTouching = true;
});

root.addEventListener("touchend", () => {
    isTouching = false;
});

root.addEventListener("touchmove", handleTouchMove);

btn.addEventListener("click", () => {
    generateGrid();
});
