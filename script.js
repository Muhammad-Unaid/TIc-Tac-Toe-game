 // Show the SweetAlert popup when the page loads
 document.addEventListener('DOMContentLoaded', function() {
    Swal.fire({
        title: '</br> </br> </br>',
         width: 500,
        padding: "3em",
        color: "#ffff",
        background: "#fff url(https://i.pinimg.com/originals/ff/81/de/ff81dee1dcdd40d560569fe2ae94b6d3.gif)",
        backdrop: `
            rgba(0,0,8,0.4)
            url("https://media.tenor.com/sCfC2XDlVPYAAAAj/wlcm.gif")
            left top
            no-repeat`,
        borderradius: "85px",

    });
});


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
