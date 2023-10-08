document.addEventListener("DOMContentLoaded", () => {

    const root = document.querySelector("#root")
    const btn = document.querySelector("#btn")



    function generateGrid(num = 16) {

        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                const div = document.createElement("div");
                div.classList.add("squares");
                root.appendChild(div);
            }
        }
    }


    function chooseGrid() {
        if (btn.classList.contains('grid-16')) {
            generateGrid(16)
        } else if (btn.classList.contains('grid-22')) {
            generateGrid(22)
        } else if (btn.classList.contains('grid-30')) {
            generateGrid(30)
        }
    }

    btn.addEventListener('click', ()=>{
        chooseGrid()
    })
})


