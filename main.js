const root = document.querySelector("#root");
const btn = document.querySelector("#root > button");
const heading = document.querySelector("#dis")
const main = document.querySelector(".main");

let isTouching = false; // To track touch interaction
let userInput = getInput();
if(userInput > 100){
    console.log("Size should be less than 100.")
    getInput();
}


function getInput(){
    return parseInt(prompt("Enter the size of grid: "))
}

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

function generateGrid( className = "active") {
    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            const sqr = document.createElement("div");
            main.style.cssText = `grid-template-columns: repeat(${userInput}, minmax(30px, 1fr))`
            
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
