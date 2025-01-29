document.addEventListener("DOMContentLoaded", () => {
    const singlePlayerBtn = document.getElementById("single-player");
    const twoPlayersBtn = document.getElementById("two-players");
    const startGameBtn = document.getElementById("start-game");

    let selectedMode = "";

    function enableStartButton(mode) {
        selectedMode = mode;
        startGameBtn.classList.add("enabled");
        startGameBtn.removeAttribute("disabled");
    }

    singlePlayerBtn.addEventListener("click", () => enableStartButton("single"));
    twoPlayersBtn.addEventListener("click", () => enableStartButton("two"));

    startGameBtn.addEventListener("click", () => {
        if (selectedMode === "single") {
            window.location.href = "single-player/index.html";
        } else if (selectedMode === "two") {
            window.location.href = "two-player/index.html";
        }
    });
});
