function login() {
    player1name= document.getElementById("player1name").value;
    player2name= document.getElementById("player2name").value;

    localStorage.setItem("player 1 name", player1name);
    localStorage.setItem("player 2 name", player2name);

    window.location= "game_page.html";
}